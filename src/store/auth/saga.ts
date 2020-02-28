import bottle from "src/services";
import { put, call, takeEvery } from "@redux-saga/core/effects";
import * as types from "./types";
import { loginByToken, loginByTokenSuccess, logoutByToken } from "./actions";
import { redirectToAuthForGetToken } from "src/store/router/actions";
import { push } from "connected-react-router";

function* redirectToAuthForGetTokenAsync() {
    try {
        yield redirectToAuthForGetToken();
    } catch (e) {
        console.error(e);
    }
}

function* loginByTokenAsync(services: typeof bottle, action: ReturnType<typeof loginByToken>) {
    try {
        const idMember = yield call(services.container.ApiAuth.apiGetIdMemberByToken, action.token);

        localStorage.setItem("token", action.token);
        localStorage.setItem("idMember", idMember);

        yield put(loginByTokenSuccess(idMember));
        yield put(push("/board"));
    } catch (e) {
        console.error(e);
    }
}

function* logoutByTokenAsync(services: typeof bottle, action: ReturnType<typeof logoutByToken>) {
    try {
        const response = yield call(services.container.ApiAuth.apiDeleteToken, action.token);

        if (response) {
            localStorage.removeItem("token");
            localStorage.removeItem("idMember");
            yield put(push("/"));
        } else {
            throw new Error("Error logout");
        }
    } catch (e) {
        console.error(e);
    }
}

export default function* authSaga(services: typeof bottle) {
    yield takeEvery(types.REDIRECT_TO_API_FOR_GET_TOKEN, redirectToAuthForGetTokenAsync);
    yield takeEvery(types.LOGIN_BY_TOKEN, loginByTokenAsync, services);
    yield takeEvery(types.LOGOUT_BY_TOKEN, logoutByTokenAsync, services);
}
