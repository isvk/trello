import React from "react";
import SelectBoardContainer from "src/components/BoardPage/NavBar/SelectBoard/SelectBoardContainer";

import "./NavBar.scss";

interface INavBarProps {
    idBoard: string;
}

export default function NavBar(props: INavBarProps) {
    return (
        <div className="navBar">
            <SelectBoardContainer idBoard={props.idBoard} />
        </div>
    );
}
