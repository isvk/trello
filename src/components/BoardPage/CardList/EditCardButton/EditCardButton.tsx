import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

import "./EditCardButton.scss";

interface IEditCardButtonProps {
    handleSetModeEditing(): void;
}

export default function EditCardButton(props: IEditCardButtonProps) {
    return (
        <button className="editCardButton" onClick={props.handleSetModeEditing}>
            <FontAwesomeIcon icon={faPencilAlt} className="icon" />
        </button>
    );
}
