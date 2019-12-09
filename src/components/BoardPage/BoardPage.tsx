import React from "react";
import ListListContainer from "./ListList/ListListContainer";

export default function BoardPage(props: { idBoard: string }) {
    return (
        <div>
            <h1>Board</h1>
            <ListListContainer idBoard={props.idBoard} />
        </div>
    );
}
