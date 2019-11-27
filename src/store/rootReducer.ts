import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import auth, { TStoreAuth } from "./auth/reducer";
import lists, { TStoreLists } from "./lists/reducer";
import items, { TStoreItems } from "./items/reducer";

export interface IStore {
    auth: TStoreAuth;
    lists: TStoreLists;
    items: TStoreItems;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        auth,
        lists,
        items
    });

export default createRootReducer;
