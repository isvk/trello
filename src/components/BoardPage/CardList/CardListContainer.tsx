import React from "react";
import { TStoreCard } from "src/store/cards/reducer";
import CardList from "./CardList";

interface ICardListContainerProps {
    cards: TStoreCard;
    idList: string;
}

export default function CardListContainer(props: ICardListContainerProps) {
    return <CardList cards={props.cards} idList={props.idList} />;
}
