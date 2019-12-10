import * as types from "./types";

export const setName = (name: string) =>
    ({
        type: types.SET_NAME,
        name
    } as const);

export const setIdList = (idList: string) =>
    ({
        type: types.SET_ID_LIST,
        idList
    } as const);

export const deleteCreateCard = () => ({ type: types.DELETE_CREATE_CARD } as const);
