import React from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { Mode } from "src/store/mode";
import { setMode } from "src/store/cards/actions";
import EditCardButton from "./EditCardButton";

interface IEditCardButtonContainerProps {
    idCard: string;
}

export default function EditCardButtonContainer(props: IEditCardButtonContainerProps) {
    const dispatch = useCustomDispatch();
    const handleSetModeEditing = () => dispatch(setMode(props.idCard, Mode.editing));

    return <EditCardButton handleSetModeEditing={handleSetModeEditing} />;
}
