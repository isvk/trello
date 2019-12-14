import React from "react";
import ListModel from "src/models/list";
import CardModel from "src/models/card";
import { cardsGetCardsByIdList } from "src/store/rootSelector";
import useCustomSelector from "src/hooks/useCustomSelector";
import List from "./List";

interface IListContainerProps {
    list: ListModel;
}

export default function ListContainer(props: IListContainerProps) {
    let cards = useCustomSelector(cardsGetCardsByIdList, props.list.id);

    cards = cards.sort((a: CardModel, b: CardModel) => {
        if (a.pos < b.pos) return -1;
        if (a.pos > b.pos) return 1;
        return 0;
    });

    return <List list={props.list} cards={cards} />;
}
