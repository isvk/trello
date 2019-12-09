import bottle from "src/services";
import { put, call, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { addBoards, loadBoardsError } from "./actions";
import Board from "src/models/board";
import List from "src/models/list";
import { IApiBoard } from "src/services/api/apiBoard";
import { IApiList } from "src/services/api/apiList";
import { addLists } from "src/store/lists/actions";

function* loadBoardsAsync(services: typeof bottle) {
    try {
        const apiBoardsWithLists = yield call(
            services.container.ApiBoard.loadBoardsWithListsForIdMember,
            localStorage.getItem("idMember") || ""
        );

        yield put(
            addBoards(
                apiBoardsWithLists.map((board: IApiBoard) => new Board(board))
            )
        );

        yield put(
            addLists(
                apiBoardsWithLists
                    .map((board: IApiBoard) => board.lists)
                    .flat()
                    .map((list: IApiList) => new List(list))
            )
        );
    } catch (e) {
        yield put(loadBoardsError());
    }
}

export default function* boardSaga(services: typeof bottle) {
    yield takeEvery(types.LOAD_BOARDS, loadBoardsAsync, services);
}
