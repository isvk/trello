import React from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { setIdList } from "src/store/createCard/actions";
import CreateCardButton from "./CreateCardButton";

interface ICreateCardButtonContainerProps {
    idList: string;
}

export default function CreateCardButtonContainer(props: ICreateCardButtonContainerProps) {
    const dispatch = useCustomDispatch();

    const handleShowCreateCardForm = () => {
        dispatch(setIdList(props.idList));
    };

    return <CreateCardButton handleShowCreateCardForm={handleShowCreateCardForm} />;
}
