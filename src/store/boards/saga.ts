import bottle from "src/services";
import { put, call, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { addBoards } from "./actions";
import Board from "src/models/board";
import List from "src/models/list";
import { IApiBoard } from "src/services/api/apiBoard";
import { IApiList } from "../../services/api/apiList";
import { addLists } from "src/store/lists/actions";

function* loadBoardsAsync(services: typeof bottle) {
    try {
        const apiBoards = yield call(
            services.container.ApiBoard.loadBoardsWithListsForIdMember,
            localStorage.getItem("idMember") || "" //TODO get store
        );

        yield put(
            addBoards(apiBoards.map((board: IApiBoard) => new Board(board)))
        );

        yield put(
            addLists(
                apiBoards
                    .map((board: IApiBoard) => board.lists)
                    .flat()
                    .map((list: IApiList) => new List(list))
            )
        );
    } catch (e) {
        console.error(e);
    }
}

export default function* boardSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_BOARDS, loadBoardsAsync, services);
}
