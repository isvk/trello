import React from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { createCardState } from "src/store/rootSelector";
import { deleteCreateCard, setName } from "src/store/createCard/actions";
import { createCard as createCardAction } from "src/store/cards/actions";
import CreateCardForm from "./CreateCardForm";
import Card from "src/models/card";

export default function CreateCardFormContainer() {
    const dispatch = useCustomDispatch();
    const createCard = useCustomSelector(createCardState);
    const handleCreateCard = (name: string) => dispatch(setName(name));
    const handleCloseForm = () => dispatch(deleteCreateCard());
    const handleSave = (card: Card) => dispatch(createCardAction(card.idList, card.name));

    return (
        <CreateCardForm
            card={createCard}
            handleSetName={handleCreateCard}
            handleCloseForm={handleCloseForm}
            handleSave={handleSave}
        />
    );
}
