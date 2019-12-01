import * as types from "./types";
import Card from "src/models/card";

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
