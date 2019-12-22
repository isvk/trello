import { Record } from "immutable";
import { Mode } from "../store/mode";

export interface IList {
    id: string;
    idBoard: string;
    name: string;
    pos: number;
    mode: Mode;
}

const initialItem: IList = {
    id: "",
    idBoard: "",
    name: "",
    pos: 0,
    mode: Mode.viewing
};

export default class List extends Record(initialItem) implements IList {}
