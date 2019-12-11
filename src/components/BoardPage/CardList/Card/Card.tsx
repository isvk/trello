import React from "react";
import CardModel from "src/models/card";
import EditCardButtonContainer from "../EditCardButton/EditCardButtonContainer";

import "./Card.scss";

interface ICardProps {
    card: CardModel;
}

export default function Card(props: ICardProps) {
    return (
        <div className="card">
            <EditCardButtonContainer idCard={props.card.id} />
            <div className="name">{props.card.name}</div>
        </div>
    );
}
