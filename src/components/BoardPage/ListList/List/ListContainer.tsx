import React from "react";
import ListModel from "src/models/list";
import { cardsGetCardsByIdList } from "src/store/rootSelector";
import useCustomSelector from "src/hooks/useCustomSelector";
import List from "./List";

export default function ListContainer(props: { list: ListModel }) {
    const cards = useCustomSelector(cardsGetCardsByIdList, props.list.id);

    return <List list={props.list} cards={cards} />;
}
