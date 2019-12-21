import React from "react";
import { Draggable } from "react-beautiful-dnd";
import CardModel from "src/models/card";
import EditCardButtonContainer from "../EditCardButton/EditCardButtonContainer";
import DeleteCardButtonContainer from "../DeleteCardButton/DeleteCardButtonContainer";

import "./Card.scss";

interface ICardProps {
    card: CardModel;
    index: number;
}

export default function Card(props: ICardProps) {
    return (
        <Draggable draggableId={props.card.id} index={props.index} key={props.card.id}>
            {provided => (
                <div
                    className="card"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <EditCardButtonContainer idCard={props.card.id} />
                    <DeleteCardButtonContainer idCard={props.card.id} />
                    <div className="name">{props.card.name}</div>
                </div>
            )}
        </Draggable>
    );
}
