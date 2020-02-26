import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "./CreateCardButton.scss";

interface ICreateCardButtonProps {
    handleShowCreateCardForm(): void;
}

export default function CreateCardButton(props: ICreateCardButtonProps) {
    return (
        <button className="createCardButton" onClick={props.handleShowCreateCardForm}>
            <FontAwesomeIcon icon={faPlus} className="icon" /> Добавить ещё одну карточку
        </button>
    );
}
