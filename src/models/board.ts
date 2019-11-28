import { Record } from "immutable";

export interface IBoard {
    id: string;
    name: string;
}

const initialItem: IBoard = {
    id: "",
    name: ""
};

export default class Board extends Record(initialItem) implements IBoard {}
