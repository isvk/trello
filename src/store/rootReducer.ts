import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import auth, { TStoreAuth } from "./auth/reducer";

export interface IStore {
    auth: TStoreAuth;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        auth
    });

export default createRootReducer;
