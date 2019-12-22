import * as types from "./types";
import List from "src/models/list";
import { Mode } from "src/store/mode";

export const addLists = (lists: List[]) =>
    ({
        type: types.ADD_LISTS,
        lists
    } as const);

export const createList = (idList: string, name: string) =>
    ({
        type: types.CREATE_LIST,
        idList,
        name
    } as const);

export const setMode = (id: string, mode: Mode) =>
    ({
        type: types.SET_MODE,
        id,
        mode
    } as const);

export const updateList = (id: string, list: List) =>
    ({
        type: types.UPDATE_LIST,
        id,
        list
    } as const);

export const updateListSuccess = (list: List) =>
    ({
        type: types.UPDATE_LIST_SUCCESS,
        list
    } as const);

export const deleteList = (id: string) =>
    ({
        type: types.DELETE_LIST,
        id
    } as const);

export const deleteListSuccess = (id: string) =>
    ({
        type: types.DELETE_LIST_SUCCESS,
        id
    } as const);

export const sortByPosition = () =>
    ({
        type: types.SORT_BY_POSITION
    } as const);

export const sortList = (id: string, idBoard: string, newIndex: number, oldIndex: number) =>
    ({
        type: types.SORT_LIST,
        id,
        idBoard,
        newIndex,
        oldIndex
    } as const);
