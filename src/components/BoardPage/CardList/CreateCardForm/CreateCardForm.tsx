import React from "react";

import "./CreateCardForm.scss";

export default function CreateCardForm(props: {
    idList: string;
    name: string;
    handleSetName: { (name: string): void };
    handleCloseForm: { (): void };
    handleSave: { (name: string, idList: string): void };
}) {
    return (
        <div className="createCard">
            <textarea className="text" value={props.name} onChange={e => props.handleSetName(e.target.value)} />
            <div>
                <button onClick={() => props.handleSave(props.idList, props.name)}>Save</button>
                <button onClick={() => props.handleCloseForm()}>Close</button>
            </div>
        </div>
    );
}
