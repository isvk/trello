import React from "react";

export default function AddCard(props: { idList: string; handleShowCreateCard: { (idList: string): void } }) {
    return <button onClick={() => props.handleShowCreateCard(props.idList)}>+ Add card</button>;
}
