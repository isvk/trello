import React from "react";
import { listsGetListsByIdBoard } from "src/store/rootSelector";
import useCustomSelector from "src/hooks/useCustomSelector";
import ListList from "./ListList";

export default function ListListContainer(props: { idBoard: string }) {
    const lists = useCustomSelector(listsGetListsByIdBoard, props.idBoard);

    return <ListList lists={lists} />;
}
