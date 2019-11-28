import * as types from "./types";
import Board from "src/models/board";

export const loadBoards = () =>
    ({
        type: types.LOAD_BOARDS
    } as const);

export const addBoards = (boards: Board[]) =>
    ({
        type: types.ADD_BOARDS,
        boards
    } as const);
