import React from "react";
import { Pencil } from "@styled-icons/boxicons-regular/Pencil";

import "./EditCardButton.scss";

interface IEditCardButtonProps {
    handleSetModeEditing(): void;
}

export default function EditCardButton(props: IEditCardButtonProps) {
    return (
        <button className="editCardButton" onClick={props.handleSetModeEditing}>
            <Pencil size="14" />
        </button>
    );
}
