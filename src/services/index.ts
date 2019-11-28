import Bottle from "bottlejs";
import Http from "./http";
import ApiAuth from "./api/apiAuth";
import ApiBoard from "./api/apiBoard";

let bottle = new Bottle();

export default bottle;
bottle.service("Http", Http);
bottle.service("ApiAuth", ApiAuth, "Http");
bottle.service("ApiBoard", ApiBoard, "Http");

declare module "bottlejs" {
    interface IContainer {
        ApiAuth: ApiAuth;
        ApiBoard: ApiBoard;
    }
}
