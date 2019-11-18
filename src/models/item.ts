import { Record } from "immutable";
import { IList } from "./list";
import { IApiItem } from "../services/api/apiItem";

export interface IItem {
    id: string;
    idList: IList["id"];
    name: string;
}

const initialItem: IItem = {
    id: "",
    idList: "",
    name: ""
};

export default class Item extends Record(initialItem) implements IItem {
    public readonly idList: string = "";

    public constructor(values: IApiItem) {
        super(values);

        this.idList = values.list_id;
    }
}
