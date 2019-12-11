import React from "react";

interface ICreateCardButtonProps {
    handleShowCreateCardForm(): void;
}

export default function CreateCardButton(props: ICreateCardButtonProps) {
    return <button onClick={props.handleShowCreateCardForm}>+ Add card</button>;
}
