import React from "react";
import { Switch, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Auth from "src/components/Auth/Auth";
import AuthSuccess from "src/components/Auth/AuthSuccess/AuthSuccess";
import ListBoardsPageContainer from "./components/ListBoardsPage/ListBoardsPageContainer";
import BoardPageContainer from "./components/BoardPage/BoardPageContainer";

import "reset-css";
import "./App.scss";

const App: React.FC = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Auth />
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <p>
                            Edit <code>src/App.tsx</code> and save to reload.
                        </p>
                        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                            Learn React
                        </a>
                    </header>
                </div>
            </Route>
            <Route exact path="/auth" />
            <Route exact path="/auth/save_token" component={AuthSuccess} />
            <Route exact path="/board" component={ListBoardsPageContainer} />
            <Route exact path="/board/:idBoard" component={BoardPageContainer} />
        </Switch>
    );
};

export default App;
