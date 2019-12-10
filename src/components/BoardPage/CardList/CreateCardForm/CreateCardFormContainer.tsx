import React from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { createCardGetName } from "src/store/rootSelector";
import { deleteCreateCard, setName } from "src/store/createCard/actions";
import CreateCardForm from "./CreateCardForm";

export default function CreateCardFormContainer() {
    const dispatch = useCustomDispatch();
    const name = useCustomSelector(createCardGetName);
    const handleCreateCard = (name: string) => dispatch(setName(name));
    const handleCloseForm = () => dispatch(deleteCreateCard());

    return <CreateCardForm name={name} handleSetName={handleCreateCard} handleCloseForm={handleCloseForm} />;
}
