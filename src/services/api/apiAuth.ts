import { IHttp } from "../IHttp";

export default class ApiAuth {
    public readonly http: IHttp;

    constructor(http: IHttp) {
        this.http = http;
    }

    apiGetIdMemberByToken = (token: string) => {
        return this.http
            .get("tokens/" + token + "/", { token })
            .then((response: any) => {
                return response.idMember;
            });
    };
}
