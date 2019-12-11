import React from "react";

import "./CreateCardForm.scss";

interface ICreateCardFormProps {
    name: string;
    handleSetName(name: string): void;
    handleCloseForm(): void;
    handleSave(): void;
}

export default function CreateCardForm(props: ICreateCardFormProps) {
    return (
        <div className="createCard">
            <textarea className="text" value={props.name} onChange={e => props.handleSetName(e.target.value)} />
            <div>
                <button onClick={props.handleSave}>Save</button>
                <button onClick={props.handleCloseForm}>Close</button>
            </div>
        </div>
    );
}
