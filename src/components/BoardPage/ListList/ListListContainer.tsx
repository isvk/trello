import React from "react";
import { listsGetListsByIdBoard } from "src/store/rootSelector";
import useCustomSelector from "src/hooks/useCustomSelector";
import ListList from "./ListList";

interface IListListContainerProps {
    idBoard: string;
}

export default function ListListContainer(props: IListListContainerProps) {
    const lists = useCustomSelector(listsGetListsByIdBoard, props.idBoard);

    return <ListList lists={lists} />;
}
