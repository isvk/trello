import React from "react";
import { TStoreCard } from "src/store/cards/reducer";
import { Mode } from "src/store/mode";
import CardContainer from "./Card/CardContainer";
import AddCardContainer from "./AddCard/AddCardContainer";
import CardEditFormContainer from "./CardEditForm/CardEditFormContainer";

import "./CardList.scss";

interface ICardListProps {
    cards: TStoreCard;
    idList: string;
}

export default function CardList(props: ICardListProps) {
    return (
        <div className="cardList">
            {props.cards
                .valueSeq()
                .map(card =>
                    card.mode === Mode.editing ? (
                        <CardEditFormContainer key={card.id} card={card} />
                    ) : (
                        <CardContainer key={card.id} card={card} />
                    )
                )}
            <AddCardContainer idList={props.idList} />
        </div>
    );
}
