import bottle from "src/services";
import { Map } from "immutable";
import { put, call, takeEvery, select } from "@redux-saga/core/effects";
import { cardsGetById, cardsGetCardsByIdList } from "src/store/rootSelector";
import * as types from "./types";
import Card from "src/models/card";
import { IApiCard } from "src/services/api/apiCard";
import {
    addCards,
    loadCardsForBoard,
    createCard,
    updateCard,
    updateCardSuccess,
    deleteCard,
    deleteCardSuccess,
    sortByPosition,
    sortCard
} from "./actions";
import { setCardsLoaded, loadCardsForBoardError } from "src/store/boards/actions";
import { deleteCreateCard } from "src/store/createCard/actions";

function* loadCardsForBoardAsync(services: typeof bottle, action: ReturnType<typeof loadCardsForBoard>) {
    try {
        const cards = yield call(services.container.ApiCard.loadCardsForBoard, action.idBoard);
        yield put(addCards(cards.map((card: IApiCard) => new Card(card))));
        yield put(sortByPosition());
        yield put(setCardsLoaded(action.idBoard));
    } catch (e) {
        yield put(loadCardsForBoardError(action.idBoard));
    }
}

function* createCardAsync(services: typeof bottle, action: ReturnType<typeof createCard>) {
    try {
        const card = yield call(services.container.ApiCard.create, action.idList, action.name);
        yield put(addCards([new Card(card)]));
        yield put(deleteCreateCard());
    } catch (e) {
        console.error(e);
    }
}

function* updateCardAsync(services: typeof bottle, action: ReturnType<typeof updateCard>) {
    try {
        const card = yield call(services.container.ApiCard.update, action.id, action.card.toJS());
        yield put(updateCardSuccess(new Card(card)));
        yield put(sortByPosition());
    } catch (e) {
        console.error(e);
    }
}

function* deleteCardAsync(services: typeof bottle, action: ReturnType<typeof deleteCard>) {
    try {
        yield call(services.container.ApiCard.delete, action.id);
        yield put(deleteCardSuccess(action.id));
    } catch (e) {
        console.error(e);
    }
}

function* sortCardAsync(services: typeof bottle, action: ReturnType<typeof sortCard>) {
    try {
        const getPositionByIndex = (cards: Map<string, Card>, index: number) => {
            const card: Card | undefined = cards.skip(index).first();
            if (card) return card.pos;
            return 0;
        };

        let card = yield select(cardsGetById, action.id);
        if (!card) throw new Error("Error not found card");

        const cards = yield select(cardsGetCardsByIdList, action.idList);

        let newPosition = 0;
        let fixMoveBetweenLists = 0;
        if (action.idList !== card.idList) fixMoveBetweenLists = 1; // при перестаскивании карточки между листами

        // вариенты перемещение карточки
        if (action.newIndex === 0) {
            // в качало списка
            newPosition = getPositionByIndex(cards, 0) / 2;
        } else if (action.newIndex === cards.size - 1 + fixMoveBetweenLists) {
            // в конец списка
            newPosition = getPositionByIndex(cards, action.newIndex - fixMoveBetweenLists) * 2;
        } else {
            // в середину
            let fixFromTopToBottom = 0;
            if (action.newIndex > action.oldIndex && action.idList === card.idList) fixFromTopToBottom = 1; // при перетаскивании карточки снизу вверх

            const prevCardPosition = getPositionByIndex(cards, action.newIndex - 1 + fixFromTopToBottom);
            const nextCardPosition = getPositionByIndex(cards, action.newIndex + fixFromTopToBottom);

            newPosition = (prevCardPosition + nextCardPosition) / 2;
        }

        card = card.merge({ idList: action.idList, pos: newPosition });
        yield put(addCards([card]));
        yield put(sortByPosition());

        let apiCard = yield call(services.container.ApiCard.update, action.id, card.toJS());

        // Если сохраняемая позиция слишком малое дробное число, слишком большое или слишком близкое к другой позиции, то сервер в ответ прислатьет карточку с другой позицией, а соседним карточкам изменяет позицию, не говоря явно об этом клиенту.
        // Можно было повторить логику изменения позиции аналогично серверной, но болеее багоустойчиво перезапроситься позицию для всех карточке.
        if (card.pos !== apiCard.pos) yield put(loadCardsForBoard(action.idBoard));
    } catch (e) {
        console.error(e);
    }
}

export default function* cardSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_CARDS_FOR_BOARD, loadCardsForBoardAsync, services);
    yield takeEvery(types.CREATE_CARD, createCardAsync, services);
    yield takeEvery(types.UPDATE_CARD, updateCardAsync, services);
    yield takeEvery(types.DELETE_CARD, deleteCardAsync, services);
    yield takeEvery(types.SORT_CARD, sortCardAsync, services);
}
