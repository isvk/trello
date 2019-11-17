import { Record } from "immutable";

export interface IList {
    id: string;
    name: string;
}

const initialList: IList = {
    id: "",
    name: ""
};

export default class List extends Record(initialList) {}
