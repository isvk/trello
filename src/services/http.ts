import { IHttp } from "./IHttp";

export interface IData {
    idMember?: string | null;
    token?: string | null;
    key?: string | null;
    [key: string]: string | number | null | undefined;
}

export default class Http implements IHttp {
    get = (url: string, data: IData) => {
        return this.request("GET", url, data);
    };

    post = (url: string, data: IData) => {
        return this.request("POST", url, data);
    };

    put = (url: string, data: IData) => {
        return this.request("PUT", url, data);
    };

    delete = (url: string, data: IData) => {
        return this.request("DELETE", url, data);
    };

    request = (method: string, url: string, data: IData = {}) => {
        if (!data.idMember) data.idMember = localStorage.getItem("idMember");
        if (!data.token) data.token = localStorage.getItem("token");
        if (!data.key) data.key = process.env.REACT_APP_API_KEY;

        const parameters = Object.keys(data)
            .filter(key => typeof data[key] === "string")
            .map(key => key + "=" + data[key])
            .join("&");

        return fetch("https://api.trello.com/1/" + url + "?" + parameters, {
            method
        }).then(response => response.json());
    };
}
