import { TStoreBoard } from "./reducer";

export const getBoardsLoadingState = (state: TStoreBoard) => state.boardsLoadingState;
export const getBoards = (state: TStoreBoard) => state.collection;
