import { all } from "redux-saga/effects";
import Bottle from "bottlejs";

export default (services: Bottle) => {
    return function* rootSaga() {
        yield all([]);
    };
};
