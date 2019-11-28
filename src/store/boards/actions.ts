import * as types from "./types";

export const loadBoards = () =>
    ({
        type: types.LOAD_BOARDS
    } as const);

export const addBoards = (arrayBoards: any) =>
    ({
        type: types.ADD_BOARDS,
        arrayBoards
    } as const);
