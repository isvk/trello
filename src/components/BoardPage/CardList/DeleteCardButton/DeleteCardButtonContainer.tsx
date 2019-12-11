import React, { useState } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { deleteCard } from "src/store/cards/actions";
import DeleteCardButton from "./DeleteCardButton";

interface IDeleteCardButtonContainerProps {
    idCard: string;
}

export default function DeleteCardButtonContainer(props: IDeleteCardButtonContainerProps) {
    const dispatch = useCustomDispatch();

    const [showModal, setShowModal] = useState();

    const handleConfirmationDelete = () => {
        dispatch(deleteCard(props.idCard));
        setShowModal(false);
    };

    const handleButtonDelete = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <DeleteCardButton
            showModal={showModal}
            handleCloseModal={handleCloseModal}
            handleButtonDelete={handleButtonDelete}
            handleConfirmationDelete={handleConfirmationDelete}
        />
    );
}
