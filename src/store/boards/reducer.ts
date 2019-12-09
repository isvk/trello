import { Map, Record } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as types from "./types";
import * as actions from "./actions";
import Board from "src/models/board";
import { loadingState } from "src/store/loadingState";

export interface IStoreBoardRecord {
    boardsLoadingState: loadingState;
    collection: Map<string, Board>;
}

const initialItem: IStoreBoardRecord = {
    boardsLoadingState: loadingState.isNotLoaded,
    collection: Map([])
};

class StoreBoardRecord extends Record(initialItem)
    implements IStoreBoardRecord {}

export type TStoreBoard = StoreBoardRecord;

const reducer = (
    state: TStoreBoard = new StoreBoardRecord(),
    action: ActionTypesInfer<typeof actions>
) => {
    switch (action.type) {
        case types.ADD_BOARDS:
            action.boards.forEach((item: Board) => {
                state = state.setIn(["collection", item.id], item);
            });
            return state.set("boardsLoadingState", loadingState.isLoaded);

        case types.LOAD_BOARDS_ERROR:
            return state.set("boardsLoadingState", loadingState.isError);

        case types.SET_CARDS_LOADED:
            return state.updateIn(
                ["collection", action.id],
                item =>
                    item && item.set("cardsLoadingState", loadingState.isLoaded)
            );

        case types.LOAD_CARDS_FOR_BOARD_ERROR:
            return state.updateIn(
                ["collection", action.id],
                item =>
                    item && item.set("cardsLoadingState", loadingState.isError)
            );

        default:
            return state;
    }
};

export default reducer;
