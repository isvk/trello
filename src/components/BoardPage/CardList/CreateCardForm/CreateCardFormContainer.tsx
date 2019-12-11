import React from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { createCardState } from "src/store/rootSelector";
import { deleteCreateCard, setName } from "src/store/createCard/actions";
import { createCard as createCardAction } from "src/store/cards/actions";
import CreateCardForm from "./CreateCardForm";

export default function CreateCardFormContainer() {
    const dispatch = useCustomDispatch();
    const createCard = useCustomSelector(createCardState);
    const handleSetName = (name: string) => dispatch(setName(name));
    const handleCloseForm = () => dispatch(deleteCreateCard());
    const handleSave = () => dispatch(createCardAction(createCard.idList, createCard.name));

    return (
        <CreateCardForm
            name={createCard.name}
            handleSetName={handleSetName}
            handleCloseForm={handleCloseForm}
            handleSave={handleSave}
        />
    );
}
