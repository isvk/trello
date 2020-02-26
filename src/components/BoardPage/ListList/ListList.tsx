import React from "react";
import { DragDropContext, Draggable, Droppable, DropResult } from "react-beautiful-dnd";
import { TStoreList } from "src/store/lists/reducer";
import ListContainer from "./List/ListContainer";

import "./ListList.scss";

interface IListListProps {
    idBoard: string;
    lists: TStoreList;
    onDragEnd(result: DropResult): void;
}

export default function ListList(props: IListListProps) {
    return (
        <DragDropContext onDragEnd={props.onDragEnd}>
            <Droppable droppableId={props.idBoard} direction="horizontal" type="column">
                {provided => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="listList">
                        {props.lists.valueSeq().map((list, index) => (
                            <Draggable draggableId={list.id} index={index} key={list.id}>
                                {provided => (
                                    <div
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        ref={provided.innerRef}
                                        className="wrapperList"
                                    >
                                        <ListContainer list={list} key={list.id} />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
