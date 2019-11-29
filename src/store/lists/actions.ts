import * as types from "./types";
import List from "src/models/list";

export const addLists = (lists: List[]) =>
    ({
        type: types.ADD_LISTS,
        lists
    } as const);
