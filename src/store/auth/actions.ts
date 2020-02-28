import * as types from "./types";

export const redirectToApiForGetToken = () =>
    ({
        type: types.REDIRECT_TO_API_FOR_GET_TOKEN
    } as const);

export const loginByToken = (token: string) =>
    ({
        type: types.LOGIN_BY_TOKEN,
        token
    } as const);

export const loginByTokenSuccess = (idMember: string) =>
    ({
        type: types.LOGIN_BY_TOKEN_SUCCESS,
        idMember
    } as const);

export const logoutByToken = (token: string) =>
    ({
        type: types.LOGOUT_BY_TOKEN,
        token
    } as const);
