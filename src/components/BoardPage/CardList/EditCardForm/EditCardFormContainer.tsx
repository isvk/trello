import React, { useState } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { Mode } from "src/store/mode";
import Card from "src/models/card";
import { setMode, updateCard as updateCardAction } from "src/store/cards/actions";
import NameCardForm from "../NameCardForm/NameCardForm";

interface IEditCardFormContainerProps {
    card: Card;
}

export default function EditCardFormContainer(props: IEditCardFormContainerProps) {
    const dispatch = useCustomDispatch();
    const [card, setCard] = useState(props.card);
    const handleChangeName = (name: string) => setCard(props.card.set("name", name));
    const handleButtonClose = () => dispatch(setMode(props.card.id, Mode.viewing));
    const handleButtonSave = () => dispatch(updateCardAction(card.id, card));

    return (
        <NameCardForm
            name={card.name}
            handleChangeName={handleChangeName}
            handleButtonClose={handleButtonClose}
            handleButtonSave={handleButtonSave}
        />
    );
}
