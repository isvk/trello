import React from "react";
import AddCard from "./AddCard";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { setIdList } from "src/store/createCard/actions";
import { createCardGetIdList } from "src/store/rootSelector";
import CreateCardFormContainer from "src/components/BoardPage/CardList/CreateCardForm/CreateCardFormContainer";

export default function AddCardContainer(props: { idList: string }) {
    const dispatch = useCustomDispatch();

    const handleShowCreateCard = (idList: string) => {
        dispatch(setIdList(idList));
    };

    const createCardIdList = useCustomSelector(createCardGetIdList);

    if (props.idList === createCardIdList) {
        return <CreateCardFormContainer />;
    }

    return <AddCard idList={props.idList} handleShowCreateCard={handleShowCreateCard} />;
}
