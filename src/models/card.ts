import { Record } from "immutable";

export interface ICard {
    id: string;
    idList: string;
    name: string;
}

const initialItem: ICard = {
    id: "",
    idList: "",
    name: ""
};

export default class Card extends Record(initialItem) implements ICard {}
