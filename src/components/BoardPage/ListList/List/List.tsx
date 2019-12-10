import React from "react";
import ListModel from "src/models/list";
import { TStoreCard } from "src/store/cards/reducer";
import CardListContainer from "src/components/BoardPage/CardList/CardListContainer";

import "./List.scss";

export default function List(props: { list: ListModel; cards: TStoreCard }) {
    return (
        <div className="list">
            <div className="title">
                <div className="name">{props.list.name}</div>
                <div className="amountCards">({props.cards.size})</div>
            </div>
            <CardListContainer cards={props.cards} idList={props.list.id} />
        </div>
    );
}
