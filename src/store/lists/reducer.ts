import { Map } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as types from "./types";
import * as actions from "./actions";
import List from "src/models/list";

export type TStoreList = Map<string, List>;

const reducer = (
    state: TStoreList = Map([]),
    action: ActionTypesInfer<typeof actions>
) => {
    switch (action.type) {
        case types.ADD_LISTS:
            action.lists.forEach((item: List) => {
                state = state.set(item.id, item);
            });
            return state;

        default:
            return state;
    }
};

export default reducer;
