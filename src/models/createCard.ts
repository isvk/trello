import { Record } from "immutable";

export interface ICreateCard {
    idList: string;
    name: string;
}

const initialAuth: ICreateCard = {
    idList: "",
    name: ""
};

export default class CreateCard extends Record(initialAuth) implements ICreateCard {}
