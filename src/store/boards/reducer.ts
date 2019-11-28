import { Map } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as types from "./types";
import * as actions from "./actions";
import Board from "src/models/board";

export type TStoreBoard = Map<string, Board>;

const reducer = (
    state: TStoreBoard = Map([]),
    action: ActionTypesInfer<typeof actions>
) => {
    switch (action.type) {
        case types.ADD_BOARDS:
            action.arrayBoards.forEach((item: any) => {
                state = state.set(item.id, item);
            });
            return state;

        default:
            return state;
    }
};

export default reducer;
