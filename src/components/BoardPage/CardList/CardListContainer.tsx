import React from "react";
import { TStoreCard } from "src/store/cards/reducer";
import CardList from "./CardList";
import useCustomSelector from "src/hooks/useCustomSelector";
import { createCardGetIdList } from "src/store/rootSelector";

interface ICardListContainerProps {
    cards: TStoreCard;
    idList: string;
}

export default function CardListContainer(props: ICardListContainerProps) {
    const createCardIdList = useCustomSelector(createCardGetIdList);

    return <CardList cards={props.cards} idList={props.idList} createCardIdList={createCardIdList} />;
}
