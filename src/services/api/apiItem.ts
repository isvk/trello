import { IHttp } from "../IHttp";
import Item from "src/models/item";

export interface IApiItem {
    id: string;
    list_id: string;
    name: string;
}

export default class ApiItem {
    constructor(private http: IHttp, private url: string = "/api/items") {}

    create = (item: Item) => {
        this.http
            .post(this.url, item)
            .then((response: IApiItem) => new Item(response));
    };

    read = (id: string) => {
        this.http
            .get(this.url + "/" + id)
            .then((response: IApiItem) => new Item(response));
    };

    update = (item: Item) => {
        this.http
            .put(this.url + "/" + item.id, item)
            .then((response: IApiItem) => new Item(response));
    };

    delete = (id: string) => {
        this.http.delete(this.url + "/" + id).then(response => {
            return {
                error: response.error === "error" ? 1 : 0,
                id
            };
        });
    };

    readAll = () => {
        this.http
            .get(this.url + "/")
            .then(response =>
                response.map((apiItem: IApiItem) => new Item(apiItem))
            );
    };
}
