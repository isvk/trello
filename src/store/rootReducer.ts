import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History, LocationState } from "history";
import auth, { TStoreAuth } from "./auth/reducer";
import boards, { TStoreBoard } from "./boards/reducer";
import lists, { TStoreList } from "./lists/reducer";
import cards, { TStoreCard } from "./cards/reducer";

export interface IStore {
    router: typeof connectRouter;
    auth: TStoreAuth;
    boards: TStoreBoard;
    lists: TStoreList;
    cards: TStoreCard;
}

const createRootReducer = (history: History<LocationState>) =>
    combineReducers({
        router: connectRouter(history),
        auth,
        boards,
        lists,
        cards
    });

export default createRootReducer;
