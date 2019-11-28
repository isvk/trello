import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { loadBoards } from "src/store/boards/actions";
import { IStore } from "src/store/rootReducer";
import Preloader from "src/components/Preloader/Preloader";

export default function ListBoardsPage() {
    const boards = useSelector((state: IStore) => state.boards);
    const dispatch = useCustomDispatch();

    if (boards.size === 0) {
        dispatch(loadBoards());
        return <Preloader />;
    } else {
        return (
            <div>
                <h1>List Boards</h1>
                <ul>
                    {boards.valueSeq().map(board => (
                        <li key={board.id}>
                            <a href={"/board/" + board.id}>{board.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}
