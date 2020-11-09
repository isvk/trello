import React from "react";
import {Switch, Route, HashRouter} from "react-router-dom";
import MainPage from "src/components/MainPage/MainPage";
import AuthSuccess from "src/components/Auth/AuthSuccess/AuthSuccess";
import ListBoardsPageContainer from "./components/ListBoardsPage/ListBoardsPageContainer";
import BoardPageContainer from "./components/BoardPage/BoardPageContainer";

import "reset-css";
import "./App.scss";

const App: React.FC = () => {
    return (
        <Switch>
            <HashRouter>
                <Route exact path="/" component={MainPage} />
                <Route exact path="/board" component={ListBoardsPageContainer} />
                <Route exact path="/board/:idBoard" component={BoardPageContainer} />
                <Route path="/auth/save_token" component={AuthSuccess} />
            </HashRouter>
        </Switch>
    );
};

export default App;
