import React from "react";
import CardModel from "src/models/card";
import Card from "./Card";

interface ICardContainerProps {
    card: CardModel;
}

export default function CardContainer(props: ICardContainerProps) {
    return <Card card={props.card} />;
}
