import React from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import CardModel from "src/models/card";
import { Mode } from "src/store/mode";
import { setMode } from "src/store/cards/actions";
import Card from "./Card";

interface ICardContainerProps {
    card: CardModel;
}

export default function CardContainer(props: ICardContainerProps) {
    const dispatch = useCustomDispatch();
    const handleSetModeEditing = () => dispatch(setMode(props.card.id, Mode.editing));

    return <Card card={props.card} handleSetModeEditing={handleSetModeEditing} />;
}
