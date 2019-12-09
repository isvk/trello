import React from "react";
import { TStoreList } from "src/store/lists/reducer";
import ListContainer from "./List/ListContainer";

import "./ListList.scss";

export default function ListList(props: { lists: TStoreList }) {
    return (
        <div className="listList">
            {props.lists.valueSeq().map(list => (
                <ListContainer list={list} key={list.id} />
            ))}
        </div>
    );
}
