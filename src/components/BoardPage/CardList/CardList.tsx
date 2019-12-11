import React from "react";
import { TStoreCard } from "src/store/cards/reducer";
import { Mode } from "src/store/mode";
import CardContainer from "./Card/CardContainer";
import CreateCardButtonContainer from "./CreateCardButton/CreateCardButtonContainer";
import EditCardFormContainer from "./EditCardForm/EditCardFormContainer";
import CreateCardFormContainer from "./CreateCardForm/CreateCardFormContainer";

import "./CardList.scss";

interface ICardListProps {
    cards: TStoreCard;
    idList: string;
    createCardIdList: string;
}

export default function CardList(props: ICardListProps) {
    return (
        <div className="cardList">
            {props.cards
                .valueSeq()
                .map(card =>
                    card.mode === Mode.editing ? (
                        <EditCardFormContainer key={card.id} card={card} />
                    ) : (
                        <CardContainer key={card.id} card={card} />
                    )
                )}

            {props.idList === props.createCardIdList ? (
                <CreateCardFormContainer />
            ) : (
                <CreateCardButtonContainer idList={props.idList} />
            )}
        </div>
    );
}
