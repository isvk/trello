import React from "react";
import SelectBoardContainer from "src/components/BoardPage/NavBar/SelectBoard/SelectBoardContainer";

import "./NavBar.scss";

export default function NavBar(props: { idBoard: string }) {
    return (
        <div className="navBar">
            <SelectBoardContainer idBoard={props.idBoard} />
        </div>
    );
}
