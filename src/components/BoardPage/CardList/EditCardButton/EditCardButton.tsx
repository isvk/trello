import React from "react";

interface IEditCardButtonProps {
    handleSetModeEditing(): void;
}

export default function EditCardButton(props: IEditCardButtonProps) {
    return <button onClick={props.handleSetModeEditing}>Edit</button>;
}
