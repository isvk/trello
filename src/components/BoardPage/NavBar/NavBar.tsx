import React from "react";
import SelectBoardContainer from "src/components/BoardPage/NavBar/SelectBoard/SelectBoardContainer";

import "./NavBar.scss";
import Logout from "src/components/Auth/Logout/Logout";

interface INavBarProps {
    idBoard: string;
}

export default function NavBar(props: INavBarProps) {
    return (
        <div className="navBar">
            <SelectBoardContainer idBoard={props.idBoard} />
            <Logout />
        </div>
    );
}
