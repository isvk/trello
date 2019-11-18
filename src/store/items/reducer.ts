import { Map } from "immutable";
import * as types from "./types";
import * as actions from "./actions";
import { ActionTypesInfer } from "src/store/actionTypes";
import Item from "src/models/item";

export type TStoreItems = Map<string, Item>;

const reducer = (
    state: TStoreItems = Map([]),
    action: ActionTypesInfer<typeof actions>
) => {
    switch (action.type) {
        case types.ADD_ITEMS:
            action.items.forEach(item => (state = state.set(item.id, item)));
            return state;

        case types.REMOVE_ITEM:
            return state.delete(action.id);

        default:
            return state;
    }
};

export default reducer;
