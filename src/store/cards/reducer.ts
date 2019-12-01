import { Map } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as types from "./types";
import * as actions from "./actions";
import Card from "src/models/card";

export type TStoreCard = Map<string, Card>;

const reducer = (
    state: TStoreCard = Map([]),
    action: ActionTypesInfer<typeof actions>
) => {
    switch (action.type) {
        case types.ADD_CARDS:
            action.cards.forEach((item: Card) => {
                state = state.set(item.id, item);
            });
            return state;

        default:
            return state;
    }
};

export default reducer;
