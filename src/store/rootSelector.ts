import { createSelector } from "reselect";
import { IStore } from "src/store/rootReducer";
import { getIdMember, getToken, getKey } from "src/store/auth/selectors";
import { getBoards, getBoardsLoadingState } from "src/store/boards/selectors";
import { getIdList, getName } from "src/store/createCard/selectors";

const propsFirstSelector = (_: IStore, prop: any) => prop;

export const authState = (state: IStore) => state.auth;
export const authGetIdMember = createSelector(authState, getIdMember);
export const authGetToken = createSelector(authState, getToken);
export const authGetKey = createSelector(authState, getKey);

export const boardState = (state: IStore) => state.boards;
export const boardsGetBoardsLoadingState = createSelector(boardState, getBoardsLoadingState);
export const boardsGetBoards = createSelector(boardState, getBoards);
export const boardsGetBoardById = createSelector(boardsGetBoards, propsFirstSelector, (boards, idBoard) =>
    boards.get(idBoard)
);

export const listState = (state: IStore) => state.lists;
export const listsGetListsByIdBoard = createSelector(listState, propsFirstSelector, (lists, idBoard) =>
    lists.filter(list => list.idBoard === idBoard)
);
export const listsGetById = createSelector(listState, propsFirstSelector, (lists, id) => {
    return lists.find(list => list.id === id);
});

export const cardState = (state: IStore) => state.cards;
export const cardsGetCardsByIdList = createSelector(cardState, propsFirstSelector, (cards, idList) =>
    cards.filter(card => card.idList === idList)
);
export const cardsGetById = createSelector(cardState, propsFirstSelector, (cards, id) => {
    return cards.find(card => card.id === id);
});

export const createCardState = (state: IStore) => state.createCard;
export const createCardGetIdList = createSelector(createCardState, getIdList);
export const createCardGetName = createSelector(createCardState, getName);
