import { Map } from "immutable";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as types from "./types";
import * as actions from "./actions";
import Card from "src/models/card";
import CardModel from "src/models/card";

export type TStoreCard = Map<string, Card>;

const reducer = (state: TStoreCard = Map([]), action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.ADD_CARDS:
            action.cards.forEach((item: Card) => {
                state = state.set(item.id, item);
            });
            return state;

        case types.SET_MODE:
            return state.setIn([action.id, "mode"], action.mode);

        case types.UPDATE_CARD_SUCCESS:
            return state.set(action.card.id, action.card);

        case types.DELETE_CARD_SUCCESS:
            return state.delete(action.id);

        case types.SORT_BY_POSITION:
            return state.sort((a: CardModel, b: CardModel) => {
                if (a.pos < b.pos) return -1;
                if (a.pos > b.pos) return 1;
                return 0;
            });

        default:
            return state;
    }
};

export default reducer;
