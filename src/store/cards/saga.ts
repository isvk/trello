import bottle from "src/services";
import { put, call, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { addCards, loadCardsForBoard } from "./actions";
import Card from "src/models/card";
import { IApiCard } from "src/services/api/apiCard";

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
    } catch (e) {
        console.error(e);
    }
}

export default function* cardSaga(services: typeof bottle) {
    yield takeEvery(
        types.LOAD_CARDS_FOR_BOARD,
        loadCardsForBoardAsync,
        services
    );
}
