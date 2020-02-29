import React from "react";
import { Link } from "react-router-dom";
import { TStoreBoard } from "src/store/boards/reducer";
import { User } from "styled-icons/heroicons-outline/User";
import { HomeAlt as Home } from "styled-icons/boxicons-regular/HomeAlt";

import "./ListBoardsPage.scss";
import Logout from "../Auth/Logout/Logout";

interface ListBoardsPageProps {
    boards: TStoreBoard;
}

export default function ListBoardsPage(props: ListBoardsPageProps) {
    return (
        <div className="pageListBoards">
            <div className="head">
                <Link to="/" className="linkHome">
                    <Home size="20" className="iconHome" />
                </Link>
                <Logout />
            </div>
            <div className="wrapper-content">
                <div className="contentPageListBoards">
                    <h1 className="title">
                        <User size="18" className="icon" />
                        Выберите доску
                    </h1>
                    <ul className="listLinkBoards">
                        {props.boards.collection.valueSeq().map(board => (
                            <li key={board.id}>
                                <Link to={"/board/" + board.id} className="linkBoard">
                                    {board.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
