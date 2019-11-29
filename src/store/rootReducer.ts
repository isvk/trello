import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import auth, { TStoreAuth } from "./auth/reducer";
import boards, { TStoreBoard } from "./boards/reducer";
import lists, { TStoreList } from "./lists/reducer";

export interface IStore {
    auth: TStoreAuth;
    boards: TStoreBoard;
    lists: TStoreList;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        auth,
        boards,
        lists
    });

export default createRootReducer;
