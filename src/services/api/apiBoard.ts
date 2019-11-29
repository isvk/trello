import { IHttp } from "../IHttp";
import { IApiList } from "./apiList";

export interface IApiBoard {
    id: string;
    name: string;
    lists: IApiList[];
}

export default class ApiBoard {
    public readonly http: IHttp;

    constructor(http: IHttp) {
        this.http = http;
    }

    loadBoardsWithListsForIdMember = (idMember: string): Promise<IApiBoard> => {
        return this.http.get("members/" + idMember + "/boards", {
            boards: "all",
            lists: "all"
        });
    };
}
