import * as types from "./types";
import * as actions from "./actions";
import { ActionTypesInfer } from "src/store/actionTypes";

export type TStoreAuth = {
    idMember: string;
    token: string;
    key: string;
};

const initialState = {
    idMember: "",
    token: "",
    key: ""
};

const reducer = (
    state: TStoreAuth = initialState,
    action: ActionTypesInfer<typeof actions>
) => {
    switch (action.type) {
        case types.LOGIN_BY_TOKEN:
            return { ...state, token: action.token };

        case types.LOGIN_BY_TOKEN_SUCCESS:
            return { ...state, idMember: action.idMember };

        default:
            return state;
    }
};

export default reducer;
