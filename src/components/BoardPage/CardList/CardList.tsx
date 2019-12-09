import React from "react";
import Card from "./Card/Card";
import { TStoreCard } from "src/store/cards/reducer";

import "./CardList.scss";

export default function CardList(props: { cards: TStoreCard; idList: string }) {
    return (
        <div className="cardList">
            {props.cards.valueSeq().map(card => (
                <Card card={card} key={card.id} />
            ))}
        </div>
    );
}
