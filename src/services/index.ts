import Bottle from "bottlejs";

let bottle = new Bottle();

export default bottle;

declare module "bottlejs" {
    interface IContainer {}
}
