import React from "react";
import ListListContainer from "./ListList/ListListContainer";
import NavBar from "src/components/BoardPage/NavBar/NavBar";

export default function BoardPage(props: { idBoard: string }) {
    return (
        <div>
            <h1>Board</h1>
            <NavBar idBoard={props.idBoard} />
            <ListListContainer idBoard={props.idBoard} />
        </div>
    );
}
