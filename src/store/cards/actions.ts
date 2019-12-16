import * as types from "./types";
import Card from "src/models/card";
import { Mode } from "src/store/mode";

export const addCards = (cards: Card[]) =>
    ({
        type: types.ADD_CARDS,
        cards
    } as const);

export const loadCardsForBoard = (idBoard: string) =>
    ({
        type: types.LOAD_CARDS_FOR_BOARD,
        idBoard
    } as const);

export const createCard = (idList: string, name: string) =>
    ({
        type: types.CREATE_CARD,
        idList,
        name
    } as const);

export const setMode = (id: string, mode: Mode) =>
    ({
        type: types.SET_MODE,
        id,
        mode
    } as const);

export const updateCard = (id: string, card: Card) =>
    ({
        type: types.UPDATE_CARD,
        id,
        card
    } as const);

export const updateCardSuccess = (card: Card) =>
    ({
        type: types.UPDATE_CARD_SUCCESS,
        card
    } as const);

export const deleteCard = (id: string) =>
    ({
        type: types.DELETE_CARD,
        id
    } as const);

export const deleteCardSuccess = (id: string) =>
    ({
        type: types.DELETE_CARD_SUCCESS,
        id
    } as const);

export const sortByPos = () =>
    ({
        type: types.SORT_BY_POS
    } as const);
