import * as types from "./types";
import List from "src/models/list";

export const addLists = (lists: Array<List>) =>
    ({
        type: types.ADD_LISTS,
        lists
    } as const);

export const removeList = (id: string) =>
    ({
        type: types.REMOVE_LIST,
        id
    } as const);
