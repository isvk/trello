import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { TStoreList } from "src/store/lists/reducer";
import ListContainer from "./List/ListContainer";

import "./ListList.scss";

interface IListListProps {
    lists: TStoreList;
    onDragEnd(result: DropResult): void;
}

export default function ListList(props: IListListProps) {
    return (
        <DragDropContext onDragEnd={props.onDragEnd}>
            <div className="listList">
                {props.lists.valueSeq().map(list => (
                    <ListContainer list={list} key={list.id} />
                ))}
            </div>
        </DragDropContext>
    );
}
