import { IHttp } from "../IHttp";

export interface IApiList {
    id: string;
    idBoard: string;
    name: string;
}

export default class ApiList {
    public readonly http: IHttp;

    constructor(http: IHttp) {
        this.http = http;
    }

    create = (idList: string, name: string): Promise<IApiList> => {
        const keepFromSource = "all";
        return this.http.post("lists", { idList, name, keepFromSource });
    };

    update = (id: string, card: IApiList) => {
        return this.http.put("lists/" + id, card);
    };

    delete = (id: string) => {
        return this.http.delete("lists/" + id);
    };
}
