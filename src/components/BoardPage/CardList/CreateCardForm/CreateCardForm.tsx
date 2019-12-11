import React from "react";
import Card from "src/models/card";

import "./CreateCardForm.scss";

export default function CreateCardForm(props: {
    card: Card;
    handleSetName: { (name: string): void };
    handleCloseForm: { (): void };
    handleSave: { (card: Card): void };
}) {
    return (
        <div className="createCard">
            <textarea className="text" value={props.card.name} onChange={e => props.handleSetName(e.target.value)} />
            <div>
                <button onClick={() => props.handleSave(props.card)}>Save</button>
                <button onClick={() => props.handleCloseForm()}>Close</button>
            </div>
        </div>
    );
}
