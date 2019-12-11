import React from "react";
import CardModel from "src/models/card";

import "./Card.scss";

interface ICardProps {
    card: CardModel;
    handleSetModeEditing(): void;
}

export default function Card(props: ICardProps) {
    return (
        <div className="card">
            <button onClick={() => props.handleSetModeEditing()}>Edit</button>
            <div className="name">{props.card.name}</div>
        </div>
    );
}
