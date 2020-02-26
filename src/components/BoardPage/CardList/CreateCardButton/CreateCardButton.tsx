import React from "react";
import { Plus } from "styled-icons/boxicons-regular/Plus";

import "./CreateCardButton.scss";

interface ICreateCardButtonProps {
    handleShowCreateCardForm(): void;
}

export default function CreateCardButton(props: ICreateCardButtonProps) {
    return (
        <button className="createCardButton" onClick={props.handleShowCreateCardForm}>
            <Plus size="20" />
            Добавить ещё одну карточку
        </button>
    );
}
