import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./NameCardForm.scss";

interface ICreateCardFormProps {
    name: string;
    handleChangeName(name: string): void;
    handleButtonClose(): void;
    handleButtonSave(): void;
    typeSave: "create" | "update";
}

export default function NameCardForm(props: ICreateCardFormProps) {
    return (
        <div className="nameCardForm">
            <textarea
                value={props.name}
                onChange={e => props.handleChangeName(e.target.value)}
                placeholder="Ввести заголовок для этой карточки"
            />
            <div className="panel">
                <button className="saveCardButton" onClick={props.handleButtonSave}>
                    {props.typeSave === "create" && (
                        <>
                            <FontAwesomeIcon icon={faPlus} className="icon" />
                            Добавить карточку
                        </>
                    )}
                    {props.typeSave === "update" && <>Сохранить</>}
                </button>
                <button className="closeNameCardForm" onClick={props.handleButtonClose}>
                    <FontAwesomeIcon icon={faTimes} className="icon" />
                </button>
            </div>
        </div>
    );
}
