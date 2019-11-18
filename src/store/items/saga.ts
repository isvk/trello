import { put, call, takeEvery } from "@redux-saga/core/effects";
import bottle from "src/services/index";
import * as types from "./types";
import {
    addItems,
    removeItem,
    createItemRequest,
    deleteItemRequest,
    updateItemRequest
} from "./actions";
import Item from "src/models/item";
import { IApiItem } from "src/services/api/apiItem";

function* createItem(
    services: typeof bottle,
    action: ReturnType<typeof createItemRequest>
) {
    try {
        const item = yield call(services.container.ApiItem.create, action.item);
        yield put(addItems([new Item(item)]));
    } catch (e) {}
}

function* readAllItems(services: typeof bottle) {
    try {
        const items = yield call(services.container.ApiItem.readAll);
        yield put(addItems(items.map((item: IApiItem) => new Item(item))));
    } catch (e) {}
}

function* updateItem(
    services: typeof bottle,
    action: ReturnType<typeof updateItemRequest>
) {
    try {
        const item = yield call(services.container.ApiItem.update, action.item);
        yield put(addItems([new Item(item)]));
    } catch (e) {}
}

function* deleteItem(
    services: typeof bottle,
    action: ReturnType<typeof deleteItemRequest>
) {
    try {
        const response = yield call(
            services.container.ApiItem.delete,
            action.id
        );
        yield put(removeItem(response.id));
    } catch (e) {}
}

export default function* itemSaga(services: typeof bottle) {
    yield takeEvery(types.CREATE_ITEM_REQUEST, createItem, services);
    yield takeEvery(types.READ_ITEMS_REQUEST, readAllItems, services);
    yield takeEvery(types.UPDATE_ITEM_REQUEST, updateItem, services);
    yield takeEvery(types.DELETE_ITEM_REQUEST, deleteItem, services);
}

/*
// Пример запроса к state внутри saga
import { select } from "@redux-saga/core/effects";
const items = yield select((state: TState) => state.items)
*/
