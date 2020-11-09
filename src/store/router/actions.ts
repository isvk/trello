import { push } from "connected-react-router";
import * as packageJson from "../../../package.json";

export const redirectToAuthForGetToken = () => {
    if (process.env.REACT_APP_API_KEY || packageJson.homepage !== "/") {
        document.location.href =
            "https://trello.com/1/authorize?scope=write&expiration=1day&name=TestTrello&return_url=" +
            window.location.origin +
            packageJson.homepage +
            "%23/auth/save_token/&scope=read&response_type=token&key=" +
            (process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : "57dec6bd85b077473d5258dd1f499f7b");
    } else {
        console.error("Not specified env.REACT_APP_API_KEY");
    }
};

export const redirectToBoard = (idBoard: string) => {
    return push("/board/" + idBoard);
};
