import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import auth, { TStoreAuth } from "./auth/reducer";
import boards, { TStoreBoard } from "./boards/reducer";

export interface IStore {
    auth: TStoreAuth;
    boards: TStoreBoard;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        auth,
        boards
    });

export default createRootReducer;
