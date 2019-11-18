import { createSelector } from "reselect";
import { IStore } from "./rootReducer";
import { getLists } from "./lists/selectors";
import { IList } from "../models/list";
import { TStoreLists } from "./lists/reducer";
import { getItems } from "./items/selectors";
import { TStoreItems } from "./items/reducer";

const propsFirstSelector = (_: IStore, prop: any) => prop;

export const listState = (state: IStore) => state.lists;
export const listGetLists = createSelector(listState, getLists);
export const listGetListById = createSelector(
    listGetLists,
    propsFirstSelector,
    (lists: TStoreLists, listId: IList["id"]) => lists.get(listId)
);

export const itemState = (state: IStore) => state.items;
export const itemGetItems = createSelector(itemState, getItems);
export const itemGetItemsByIdList = createSelector(
    itemGetItems,
    propsFirstSelector,
    (items: TStoreItems, idList: IList["id"]) =>
        items.filter(item => item.idList === idList)
);
