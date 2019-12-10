import React from "react";

import "./CreateCardForm.scss";

export default function CreateCardForm(props: {
    name: string;
    handleSetName: { (name: string): void };
    handleCloseForm: { (): void };
}) {
    return (
        <div className="createCard">
            <textarea className="text" value={props.name} onChange={e => props.handleSetName(e.target.value)} />
            <div>
                <button>Save</button>
                <button onClick={() => props.handleCloseForm()}>Close</button>
            </div>
        </div>
    );
}
