import React, { useState } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { Mode } from "src/store/mode";
import Card from "src/models/card";
import { setMode, updateCard as updateCardAction } from "src/store/cards/actions";
import CreateCardForm from "../CreateCardForm/CreateCardForm";

interface ICardEditFormContainerProps {
    card: Card;
}

export default function CardEditFormContainer(props: ICardEditFormContainerProps) {
    const dispatch = useCustomDispatch();
    const [card, setCard] = useState(props.card);
    const handleSetName = (name: string) => setCard(props.card.set("name", name));
    const handleCloseForm = () => dispatch(setMode(props.card.id, Mode.viewing));
    const handleSave = () => dispatch(updateCardAction(card.id, card.name));

    return (
        <CreateCardForm
            name={card.name}
            handleSetName={handleSetName}
            handleCloseForm={handleCloseForm}
            handleSave={handleSave}
        />
    );
}
