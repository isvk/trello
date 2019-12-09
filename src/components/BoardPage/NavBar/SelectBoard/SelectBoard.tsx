import React from "react";
import { TStoreBoard } from "src/store/boards/reducer";

export default function SelectBoard(props: {
    boards: TStoreBoard;
    idBoard: string;
    handleRedirectToBoard: { (idBoard: string): void };
}) {
    return (
        <div className="buttonSelectBoard">
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
