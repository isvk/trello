import Bottle from "bottlejs";
import Http from "./http";
import ApiAuth from "./api/apiAuth";
import ApiBoard from "./api/apiBoard";
import ApiList from "./api/apiList";
import ApiCard from "./api/apiCard";

let bottle = new Bottle();

export default bottle;
bottle.service("Http", Http);
bottle.service("ApiAuth", ApiAuth, "Http");
bottle.service("ApiBoard", ApiBoard, "Http");
bottle.service("ApiList", ApiList, "Http");
bottle.service("ApiCard", ApiCard, "Http");

declare module "bottlejs" {
    interface IContainer {
        ApiAuth: ApiAuth;
        ApiBoard: ApiBoard;
        ApiList: ApiList;
        ApiCard: ApiCard;
    }
}
