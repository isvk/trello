import Bottle from "bottlejs";
import Http from "./http";
import ApiAuth from "./api/apiAuth";
import ApiItem from "./api/apiItem";

let bottle = new Bottle();

export default bottle;
bottle.service("Http", Http);
bottle.service("ApiAuth", ApiAuth, "Http");
bottle.service("ApiItem", ApiItem, "Http");

declare module "bottlejs" {
    interface IContainer {
        ApiAuth: ApiAuth;
        ApiItem: ApiItem;
    }
}
