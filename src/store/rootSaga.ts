import { all } from "redux-saga/effects";
import Bottle from "bottlejs";
import authSaga from "./auth/saga";

export default (services: Bottle) => {
    return function* rootSaga() {
        yield all([authSaga(services)]);
    };
};
