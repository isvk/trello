import bottle from "src/services";
import { put, call, takeEvery } from "@redux-saga/core/effects";
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
    sortByPos
} from "./actions";
import { setCardsLoaded, loadCardsForBoardError } from "src/store/boards/actions";
import { deleteCreateCard } from "../createCard/actions";

function* loadCardsForBoardAsync(services: typeof bottle, action: ReturnType<typeof loadCardsForBoard>) {
    try {
        const cards = yield call(services.container.ApiCard.loadCardsForBoard, action.idBoard);
        yield put(addCards(cards.map((card: IApiCard) => new Card(card))));
        yield put(sortByPos());
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
        console.log(e);
    }
}

function* updateCardAsync(services: typeof bottle, action: ReturnType<typeof updateCard>) {
    try {
        const card = yield call(services.container.ApiCard.update, action.id, action.card);
        yield put(updateCardSuccess(new Card(card)));
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

export default function* cardSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_CARDS_FOR_BOARD, loadCardsForBoardAsync, services);
    yield takeEvery(types.CREATE_CARD, createCardAsync, services);
    yield takeEvery(types.UPDATE_CARD, updateCardAsync, services);
    yield takeEvery(types.DELETE_CARD, deleteCardAsync, services);
}
