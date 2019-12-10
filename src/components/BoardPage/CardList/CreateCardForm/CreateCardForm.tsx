import React from "react";

import "./CreateCardForm.scss";

export default function CreateCardForm(props: { name: string; handleSetName: { (name: string): void } }) {
    return (
        <div className="createCard">
            <textarea className="text" value={props.name} onChange={e => props.handleSetName(e.target.value)} />
            <button>Save</button>
        </div>
    );
}
