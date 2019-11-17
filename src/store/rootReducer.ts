import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";

export type TStore = {};

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history)
    });

export default createRootReducer;
