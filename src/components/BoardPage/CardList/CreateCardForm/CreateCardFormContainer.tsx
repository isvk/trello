import React from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { createCardState } from "src/store/rootSelector";
import { deleteCreateCard, setName } from "src/store/createCard/actions";
import { createCard as createCardAction } from "src/store/cards/actions";
import NameCardForm from "../NameCardForm/NameCardForm";

export default function CreateCardFormContainer() {
    const dispatch = useCustomDispatch();
    const createCard = useCustomSelector(createCardState);
    const handleChangeName = (name: string) => dispatch(setName(name));
    const handleCloseForm = () => dispatch(deleteCreateCard());
    const handleSave = () => dispatch(createCardAction(createCard.idList, createCard.name));

    return (
        <NameCardForm
            name={createCard.name}
            handleChangeName={handleChangeName}
            handleButtonClose={handleCloseForm}
            handleButtonSave={handleSave}
            typeSave="create"
        />
    );
}
