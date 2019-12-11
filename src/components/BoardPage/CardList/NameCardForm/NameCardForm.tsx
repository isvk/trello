import React from "react";

import "./NameCardForm.scss";

interface ICreateCardFormProps {
    name: string;
    handleChangeName(name: string): void;
    handleButtonClose(): void;
    handleButtonSave(): void;
}

export default function NameCardForm(props: ICreateCardFormProps) {
    return (
        <div className="nameCardForm">
            <textarea className="text" value={props.name} onChange={e => props.handleChangeName(e.target.value)} />
            <div>
                <button onClick={props.handleButtonSave}>Save</button>
                <button onClick={props.handleButtonClose}>Close</button>
            </div>
        </div>
    );
}
