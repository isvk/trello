import React from "react";
import ListListContainer from "./ListList/ListListContainer";
import NavBar from "src/components/BoardPage/NavBar/NavBar";

import "./BoardPage.scss";

interface IBoardPageProps {
    idBoard: string;
}

export default function BoardPage(props: IBoardPageProps) {
    return (
        <div className="board">
            <NavBar idBoard={props.idBoard} />
            <ListListContainer idBoard={props.idBoard} />
        </div>
    );
}
