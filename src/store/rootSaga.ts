import { all } from "redux-saga/effects";
import Bottle from "bottlejs";
import itemSaga from "src/store/items/saga";

export default (services: Bottle) => {
    return function* rootSaga() {
        yield all([itemSaga(services)]);
    };
};
