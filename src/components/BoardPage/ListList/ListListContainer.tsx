import React from "react";
import { DropResult } from "react-beautiful-dnd";
import useCustomSelector from "src/hooks/useCustomSelector";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { listsGetListsByIdBoard } from "src/store/rootSelector";
import { sortCard } from "src/store/cards/actions";
import ListList from "./ListList";
import { sortList } from "src/store/lists/actions";

interface IListListContainerProps {
    idBoard: string;
}

export default function ListListContainer(props: IListListContainerProps) {
    const lists = useCustomSelector(listsGetListsByIdBoard, props.idBoard);
    const dispatch = useCustomDispatch();

    const onDragEnd = (result: DropResult) => {
        if (
            !result.destination ||
            (result.destination.index === result.source.index &&
                result.destination.droppableId === result.source.droppableId)
        )
            return false;

        if (result.destination.droppableId === props.idBoard) {
            dispatch(
                sortList(
                    result.draggableId,
                    result.destination.droppableId,
                    result.destination.index,
                    result.source.index
                )
            );
        } else {
            dispatch(
                sortCard(
                    result.draggableId,
                    result.destination.droppableId,
                    props.idBoard,
                    result.destination.index,
                    result.source.index
                )
            );
        }
    };

    return <ListList idBoard={props.idBoard} lists={lists} onDragEnd={onDragEnd} />;
}
