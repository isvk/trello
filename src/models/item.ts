import { Record } from "immutable";
import { IList } from "./list";

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

    //TODO any = IItemApi
    public constructor(values: any) {
        super(values);

        this.idList = values.list_id;
    }
}
