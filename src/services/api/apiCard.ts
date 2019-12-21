import { IHttp } from "../IHttp";

export interface IApiCard {
    id: string;
    idList: string;
    name: string;
    pos: number;
}

export default class ApiCard {
    public readonly http: IHttp;

    constructor(http: IHttp) {
        this.http = http;
    }

    loadCardsForBoard = (idBoard: string): Promise<IApiCard> => {
        return this.http.get("boards/" + idBoard + "/cards/");
    };

    create = (idList: string, name: string): Promise<IApiCard> => {
        const keepFromSource = "all";
        return this.http.post("cards", { idList, name, keepFromSource });
    };

    update = (id: string, card: IApiCard) => {
        return this.http.put("cards/" + id, card);
    };

    delete = (id: string) => {
        return this.http.delete("cards/" + id);
    };
}
