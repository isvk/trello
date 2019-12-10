import React from "react";
import { TStoreCard } from "src/store/cards/reducer";
import CardList from "./CardList";

export default function CardListContainer(props: { cards: TStoreCard; idList: string }) {
    return <CardList cards={props.cards} idList={props.idList} />;
}
