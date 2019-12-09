import React from "react";
import CardModel from "src/models/card";

import "./Card.scss";

export default function Card(props: { card: CardModel }) {
    return (
        <div className="card">
            <div className="name">{props.card.name}</div>
        </div>
    );
}
