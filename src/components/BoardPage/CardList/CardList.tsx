import React from "react";
import { TStoreCard } from "src/store/cards/reducer";
import { Mode } from "src/store/mode";
import { Draggable, Droppable } from "react-beautiful-dnd";
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
        <Droppable droppableId={props.idList}>
            {provided => (
                <div {...provided.droppableProps} ref={provided.innerRef} className="cardList">
                    {props.cards.valueSeq().map((card, index) =>
                        card.mode === Mode.editing ? (
                            <EditCardFormContainer key={card.id} card={card} />
                        ) : (
                            <Draggable draggableId={card.id} index={index} key={card.id}>
                                {provided => (
                                    <div
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                    >
                                        <CardContainer key={card.id} card={card} />
                                    </div>
                                )}
                            </Draggable>
                        )
                    )}

                    {props.idList === props.createCardIdList ? (
                        <CreateCardFormContainer />
                    ) : (
                        <CreateCardButtonContainer idList={props.idList} />
                    )}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
}
