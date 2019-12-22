import { Map } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as types from "./types";
import * as actions from "./actions";
import List from "src/models/list";

export type TStoreList = Map<string, List>;

const reducer = (state: TStoreList = Map([]), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.ADD_LISTS:
            action.lists.forEach((item: List) => {
                state = state.set(item.id, item);
            });
            return state;

        case types.SET_MODE:
            return state.setIn([action.id, "mode"], action.mode);

        case types.UPDATE_LIST_SUCCESS:
            return state.set(action.list.id, action.list);

        case types.DELETE_LIST_SUCCESS:
            return state.delete(action.id);

        case types.SORT_BY_POSITION:
            return state.sort((a: List, b: List) => {
                if (a.pos < b.pos) return -1;
                if (a.pos > b.pos) return 1;
                return 0;
            });

        default:
            return state;
    }
};

export default reducer;
