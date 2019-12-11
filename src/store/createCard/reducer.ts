import * as types from "./types";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as actions from "src/store/createCard/actions";
import Card from "src/models/card";

export type TStoreCreateCard = Card;
const initialState = new Card();

const reducer = (state: TStoreCreateCard = initialState, action: ActionTypesInfer<typeof actions>) => {
    switch (action.type) {
        case types.SET_ID_LIST:
            return state.set("idList", action.idList);

        case types.SET_NAME:
            return state.set("name", action.name);

        case types.DELETE_CREATE_CARD:
            return initialState;

        default:
            return state;
    }
};

export default reducer;
