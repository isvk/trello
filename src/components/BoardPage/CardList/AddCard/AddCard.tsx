import React from "react";

interface IAddCardProps {
    idList: string;
    handleShowCreateCard(idList: string): void;
}

export default function AddCard(props: IAddCardProps) {
    return <button onClick={() => props.handleShowCreateCard(props.idList)}>+ Add card</button>;
}
