import { IHttp } from "../IHttp";

export interface IApiBoard {
    id: string;
    name: string;
    lists: { id: string; name: string }[]; //TODO IApiList
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
