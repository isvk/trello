import { Record } from "immutable";
import { Mode } from "src/store/mode";

export interface ICard {
    id: string;
    idList: string;
    name: string;
    pos: number;
    mode: Mode;
}

const initialItem: ICard = {
    id: "",
    idList: "",
    name: "",
    pos: 0,
    mode: Mode.viewing
};

export default class Card extends Record(initialItem) implements ICard {}
