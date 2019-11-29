import { Record } from "immutable";

export interface IList {
    id: string;
    idBoard: string;
    name: string;
}

const initialItem: IList = {
    id: "",
    idBoard: "",
    name: ""
};

export default class List extends Record(initialItem) implements IList {}
