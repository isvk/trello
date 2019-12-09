import React from "react";
import { Link } from "react-router-dom";
import { TStoreBoard } from "src/store/boards/reducer";

export default function ListBoardsPage(props: { boards: TStoreBoard }) {
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
