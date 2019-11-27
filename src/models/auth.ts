import { Record } from "immutable";

export interface IAuth {
    idMember: string;
    token: string;
    key: string;
}

const initialAuth: IAuth = {
    idMember: "",
    token: "",
    key: ""
};

export default class Auth extends Record(initialAuth) implements IAuth {}
