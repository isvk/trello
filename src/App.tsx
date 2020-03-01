import React from "react";
import { Switch, Route } from "react-router-dom";
import MainPage from "src/components/MainPage/MainPage";
import AuthSuccess from "src/components/Auth/AuthSuccess/AuthSuccess";
import ListBoardsPageContainer from "./components/ListBoardsPage/ListBoardsPageContainer";
import BoardPageContainer from "./components/BoardPage/BoardPageContainer";

import "reset-css";
import "./App.scss";

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/auth" />
            <Route exact path="/auth/save_token" component={AuthSuccess} />
            <Route exact path="/board" component={ListBoardsPageContainer} />
            <Route exact path="/board/:idBoard" component={BoardPageContainer} />
        </Switch>
    );
};

export default App;
