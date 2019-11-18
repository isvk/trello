import { Map } from "immutable";
import * as types from "./types";
import * as actions from "./actions";
import { ActionTypesInfer } from "src/store/actionTypes";
import List from "src/models/list";

export type TStoreLists = Map<string, List>;

const reducer = (
    state: TStoreLists = Map([]),
    action: ActionTypesInfer<typeof actions>
) => {
    switch (action.type) {
        case types.ADD_LISTS:
            action.lists.forEach(list => (state = state.set(list.id, list)));
            return state;

        case types.REMOVE_LIST:
            return state.delete(action.id);

        default:
            return state;
    }
};

export default reducer;
