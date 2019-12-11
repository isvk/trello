import { Record } from "immutable";
import { LoadingState } from "src/store/loadingState";

export interface IBoard {
    id: string;
    name: string;
    cardsLoadingState: LoadingState;
}

const initialItem: IBoard = {
    id: "",
    name: "",
    cardsLoadingState: LoadingState.isNotLoaded
};

export default class Board extends Record(initialItem) implements IBoard {}
