import * as types from "./types";
import { ActionTypesInfer } from "src/store/actionTypes";
import * as actions from "src/store/createCard/actions";
import CreateCardModel from "src/models/createCard";

export type TStoreCreateCard = CreateCardModel;

const reducer = (
    state: TStoreCreateCard = new CreateCardModel({ idList: "", name: "" }),
    action: ActionTypesInfer<typeof actions>
) => {
    switch (action.type) {
        case types.SET_ID_LIST:
            return state.set("idList", action.idList);

        case types.SET_NAME:
            return state.set("name", action.name);

        default:
            return state;
    }
};

export default reducer;
