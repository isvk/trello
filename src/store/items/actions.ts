import * as types from "./types";
import Item from "src/models/item";

export const addItems = (items: Array<Item>) =>
    ({
        type: types.ADD_ITEMS,
        items
    } as const);

export const removeItem = (id: string) =>
    ({
        type: types.REMOVE_ITEM,
        id
    } as const);

export const createItemRequest = (item: Item) =>
    ({
        type: types.CREATE_ITEM_REQUEST,
        item
    } as const);

export const createItemSuccess = (item: Item) =>
    ({
        type: types.CREATE_ITEM_SUCCESS,
        item
    } as const);

export const createItemFailure = (id: string, item: Item) =>
    ({
        type: types.CREATE_ITEM_FAILURE,
        id,
        item
    } as const);

export const readItemsRequest = () =>
    ({
        type: types.READ_ITEMS_REQUEST
    } as const);

export const readItemsSuccess = (items: Array<Item>) =>
    ({
        type: types.READ_ITEMS_SUCCESS,
        items
    } as const);

export const readItemsFailure = () =>
    ({
        type: types.READ_ITEMS_FAILURE
    } as const);

export const updateItemRequest = (id: string, item: Item) =>
    ({
        type: types.UPDATE_ITEM_REQUEST,
        id,
        item
    } as const);

export const updateItemSuccess = (id: string, item: Item) =>
    ({
        type: types.UPDATE_ITEM_SUCCESS,
        id,
        item
    } as const);

export const updateItemFailure = (id: string) =>
    ({
        type: types.UPDATE_ITEM_FAILURE,
        id
    } as const);

export const deleteItemRequest = (id: string) =>
    ({
        type: types.DELETE_ITEM_REQUEST,
        id
    } as const);

export const deleteItemSuccess = (id: string) =>
    ({
        type: types.DELETE_ITEM_SUCCESS,
        id
    } as const);

export const deleteItemFailure = (id: string) =>
    ({
        type: types.DELETE_ITEM_FAILURE,
        id
    } as const);
