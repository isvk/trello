import React from "react";
import { TStoreBoard } from "src/store/boards/reducer";

import "./SelectBoard.scss";

interface ISelectBoardProps {
    boards: TStoreBoard;
    idBoard: string;
    handleRedirectToBoard: { (idBoard: string): void };
}

export default function SelectBoard(props: ISelectBoardProps) {
    return (
        <div className="buttonSelectBoard">
            <span className="title">Выбор доски:</span>
            <select onChange={e => props.handleRedirectToBoard(e.target.value)} value={props.idBoard}>
                {props.boards.collection.valueSeq().map(board => (
                    <option value={board.id} key={board.id}>
                        {board.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
