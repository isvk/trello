import bottle from "src/services";
import { Map } from "immutable";
import { put, call, takeEvery, select } from "@redux-saga/core/effects";
import { listsGetById, listsGetListsByIdBoard } from "src/store/rootSelector";
import * as types from "./types";
import List from "src/models/list";
import {
    addLists,
    createList,
    updateList,
    updateListSuccess,
    deleteList,
    deleteListSuccess,
    sortByPosition,
    sortList
} from "./actions";
import { loadBoards } from "src/store/boards/actions";

function* createListAsync(services: typeof bottle, action: ReturnType<typeof createList>) {
    try {
        const list = yield call(services.container.ApiList.create, action.idList, action.name);
        yield put(addLists([new List(list)]));
    } catch (e) {
        console.error(e);
    }
}

function* updateListAsync(services: typeof bottle, action: ReturnType<typeof updateList>) {
    try {
        const list = yield call(services.container.ApiList.update, action.id, action.list.toJS());
        yield put(updateListSuccess(new List(list)));
        yield put(sortByPosition());
    } catch (e) {
        console.error(e);
    }
}

function* deleteListAsync(services: typeof bottle, action: ReturnType<typeof deleteList>) {
    try {
        yield call(services.container.ApiList.delete, action.id);
        yield put(deleteListSuccess(action.id));
    } catch (e) {
        console.error(e);
    }
}

function* sortListAsync(services: typeof bottle, action: ReturnType<typeof sortList>) {
    try {
        const getPositionByIndex = (lists: Map<string, List>, index: number) => {
            const list: List | undefined = lists.skip(index).first();
            if (list) return list.pos;
            return 0;
        };

        let list = yield select(listsGetById, action.id);
        if (!list) throw new Error("Error not found list");

        const lists = yield select(listsGetListsByIdBoard, action.idBoard);

        let newPosition = 0;

        // вариенты перемещение листа
        if (action.newIndex === 0) {
            // в качало списка
            newPosition = getPositionByIndex(lists, 0) / 2;
        } else if (action.newIndex === lists.size - 1) {
            // в конец списка
            newPosition = getPositionByIndex(lists, action.newIndex) * 2;
        } else {
            // в середину
            let fixFromTopToBottom = 0;
            if (action.newIndex > action.oldIndex) fixFromTopToBottom = 1; // при перетаскивании карточки снизу вверх

            const prevListPosition = getPositionByIndex(lists, action.newIndex - 1 + fixFromTopToBottom);
            const nextListPosition = getPositionByIndex(lists, action.newIndex + fixFromTopToBottom);

            newPosition = (prevListPosition + nextListPosition) / 2;
        }

        list = list.merge({ pos: newPosition });
        yield put(addLists([list]));
        yield put(sortByPosition());

        let apiList = yield call(services.container.ApiList.update, action.id, list.toJS());

        // Если сохраняемая позиция слишком малое дробное число, слишком большое или слишком близкое к другой позиции, то сервер в ответ прислатьет карточку с другой позицией, а соседним карточкам изменяет позицию, не говоря явно об этом клиенту.
        // Можно было повторить логику изменения позиции аналогично серверной, но болеее багоустойчиво перезапроситься позицию для всех карточке.
        if (list.pos !== apiList.pos) yield put(loadBoards());
    } catch (e) {
        console.error(e);
    }
}

export default function* listSaga(services: typeof bottle) {
    yield takeEvery(types.CREATE_LIST, createListAsync, services);
    yield takeEvery(types.UPDATE_LIST, updateListAsync, services);
    yield takeEvery(types.DELETE_LIST, deleteListAsync, services);
    yield takeEvery(types.SORT_LIST, sortListAsync, services);
}
