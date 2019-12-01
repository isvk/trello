import { all } from "redux-saga/effects";
import Bottle from "bottlejs";
import authSaga from "./auth/saga";
import boardSaga from "./boards/saga";
import cardSaga from "./cards/saga";

export default (services: Bottle) => {
    return function* rootSaga() {
        yield all([
            authSaga(services),
            boardSaga(services),
            cardSaga(services)
        ]);
    };
};
