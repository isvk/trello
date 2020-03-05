import React, { useRef, useEffect } from "react";
import { Close } from "styled-icons/material/Close";

import "./NameCardForm.scss";

interface ICreateCardFormProps {
    name: string;
    handleChangeName(name: string): void;
    handleButtonClose(): void;
    handleButtonSave(): void;
    typeSave: "create" | "update";
}

export default function NameCardForm(props: ICreateCardFormProps) {
    let textInput = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textInput.current) textInput.current.focus();
    }, []);

    return (
        <div className="nameCardForm">
            <textarea
                value={props.name}
                onChange={e => props.handleChangeName(e.target.value)}
                placeholder="Ввести заголовок для этой карточки"
                ref={textInput}
            />
            <div className="panel">
                <button className="saveCardButton" onClick={props.handleButtonSave}>
                    {props.typeSave === "create" && <>Добавить карточку</>}
                    {props.typeSave === "update" && <>Сохранить</>}
                </button>
                <button className="closeNameCardForm" onClick={props.handleButtonClose}>
                    <Close size="20" />
                </button>
            </div>
        </div>
    );
}
