import React from "react";
import { TStoreList } from "src/store/lists/reducer";
import ListContainer from "./List/ListContainer";

import "./ListList.scss";

interface IListListProps {
    lists: TStoreList;
}

export default function ListList(props: IListListProps) {
    return (
        <div className="listList">
            {props.lists.valueSeq().map(list => (
                <ListContainer list={list} key={list.id} />
            ))}
        </div>
    );
}
