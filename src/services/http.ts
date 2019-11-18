import { IHttp } from "./IHttp";

export default class Http implements IHttp {
    get = (url: string, data: object) => {
        return this.request("GET", url, data);
    };

    post = (url: string, data: object) => {
        return this.request("POST", url, data);
    };

    put = (url: string, data: object) => {
        return this.request("PUT", url, data);
    };

    delete = (url: string, data: object) => {
        return this.request("DELETE", url, data);
    };

    request = (method: string, url: string, data = {}) => {
        return fetch("http://localhost:8000/api/" + url, {
            method
        }).then(response => response.json());
    };
}
