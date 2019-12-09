import { Record } from "immutable";
import { loadingState } from "src/store/loadingState";

export interface IBoard {
    id: string;
    name: string;
    cardsLoadingState: loadingState;
}

const initialItem: IBoard = {
    id: "",
    name: "",
    cardsLoadingState: loadingState.isNotLoaded
};

export default class Board extends Record(initialItem) implements IBoard {}
