import * as types from "./types";
import Board from "src/models/board";

export const loadBoards = () =>
    ({
        type: types.LOAD_BOARDS
    } as const);

export const loadBoardsError = () =>
    ({
        type: types.LOAD_BOARDS_ERROR
    } as const);

export const addBoards = (boards: Board[]) =>
    ({
        type: types.ADD_BOARDS,
        boards
    } as const);

export const setCardsLoaded = (id: string) =>
    ({
        type: types.SET_CARDS_LOADED,
        id
    } as const);

export const loadCardsForBoardError = (id: string) =>
    ({
        type: types.LOAD_CARDS_FOR_BOARD_ERROR,
        id
    } as const);
