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
