import bottle from "src/services";
import { put, call, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import Card from "src/models/card";
import { IApiCard } from "src/services/api/apiCard";
import { addCards, loadCardsForBoard } from "./actions";
import {
    setCardsLoaded,
    loadCardsForBoardError
} from "src/store/boards/actions";

function* loadCardsForBoardAsync(
    services: typeof bottle,
    action: ReturnType<typeof loadCardsForBoard>
) {
    try {
        const cards = yield call(
            services.container.ApiCard.loadCardsForBoard,
            action.idBoard
        );
        yield put(addCards(cards.map((card: IApiCard) => new Card(card))));
        yield put(setCardsLoaded(action.idBoard));
    } catch (e) {
        yield put(loadCardsForBoardError(action.idBoard));
    }
}

export default function* cardSaga(services: typeof bottle) {
    yield takeEvery(
        types.LOAD_CARDS_FOR_BOARD,
        loadCardsForBoardAsync,
        services
    );
}
