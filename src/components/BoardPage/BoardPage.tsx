import React from "react";
import ListListContainer from "./ListList/ListListContainer";
import NavBar from "src/components/BoardPage/NavBar/NavBar";

interface IBoardPageProps {
    idBoard: string;
}

export default function BoardPage(props: IBoardPageProps) {
    return (
        <div>
            <h1>Board</h1>
            <NavBar idBoard={props.idBoard} />
            <ListListContainer idBoard={props.idBoard} />
        </div>
    );
}
