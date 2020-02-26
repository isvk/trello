import React from "react";
import CardModel from "src/models/card";
import EditCardButtonContainer from "../EditCardButton/EditCardButtonContainer";
import DeleteCardButtonContainer from "../DeleteCardButton/DeleteCardButtonContainer";

import "./Card.scss";

interface ICardProps {
    card: CardModel;
}

export default function Card(props: ICardProps) {
    return (
        <div className="card">
            <div className="panel">
                <EditCardButtonContainer idCard={props.card.id} />
                <DeleteCardButtonContainer idCard={props.card.id} />
            </div>
            <div className="name">{props.card.name}</div>
        </div>
    );
}
