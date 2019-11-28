import bottle from "src/services";
import { put, call, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { addBoards } from "./actions";
import Board from "src/models/board";
import { IApiBoard } from "src/services/api/apiBoard";

function* loadBoardsAsync(services: typeof bottle) {
    try {
        const apiBoards = yield call(
            services.container.ApiBoard.loadBoardsWithListsForIdMember,
            localStorage.getItem("idMember") || "" //TODO get store
        );

        yield put(
            addBoards(apiBoards.map((board: IApiBoard) => new Board(board)))
        );
    } catch (e) {
        console.error(e);
    }
}

export default function* boardSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_BOARDS, loadBoardsAsync, services);
}
