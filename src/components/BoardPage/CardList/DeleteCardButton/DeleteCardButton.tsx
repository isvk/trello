import React from "react";
import Modal from "src/components/Modal/Modal";

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
                <Modal title="Delete card?" onClose={props.handleCloseModal}>
                    <div className="wrapper-buttons">
                        <button onClick={props.handleConfirmationDelete}>Да</button>
                        <button onClick={props.handleCloseModal}>Нет</button>
                    </div>
                </Modal>
            )}
            <button onClick={props.handleButtonDelete}>Delete</button>
        </>
    );
}
