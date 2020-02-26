import React from "react";
import Modal from "src/components/Modal/Modal";
import { Trash } from "styled-icons/boxicons-regular/Trash";

import "./DeleteCardButton.scss";

interface IDeleteCardButtonProps {
    showModal: boolean;
    handleCloseModal(): void;
    handleConfirmationDelete(): void;
    handleButtonDelete(): void;
}

export default function DeleteCardButton(props: IDeleteCardButtonProps) {
    return (
        <>
            {props.showModal && (
                <Modal title="Удалить карточку?" onClose={props.handleCloseModal}>
                    <div className="wrapperButtons">
                        <button onClick={props.handleConfirmationDelete}>Да</button>
                        <button onClick={props.handleCloseModal}>Нет</button>
                    </div>
                </Modal>
            )}
            <button className="deleteCardButton" onClick={props.handleButtonDelete}>
                <Trash size="14" />
            </button>
        </>
    );
}
