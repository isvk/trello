import React from "react";
import { Link } from "react-router-dom";
import { TStoreBoard } from "src/store/boards/reducer";

interface ListBoardsPageProps {
    boards: TStoreBoard;
}

export default function ListBoardsPage(props: ListBoardsPageProps) {
    return (
        <div>
            <h1>List Boards</h1>
            <ul>
                {props.boards.collection.valueSeq().map(board => (
                    <li key={board.id}>
                        <Link to={"/board/" + board.id}>{board.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
