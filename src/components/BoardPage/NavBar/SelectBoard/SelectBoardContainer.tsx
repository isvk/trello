import React from "react";
import { useDispatch } from "react-redux";
import useCustomSelector from "src/hooks/useCustomSelector";
import { boardState } from "src/store/rootSelector";
import { redirectToBoard } from "src/store/router/actions";
import SelectBoard from "./SelectBoard";

export default function SelectBoardContainer(props: { idBoard: string }) {
    const dispatch = useDispatch();
    const boards = useCustomSelector(boardState);
    const handleRedirectToBoard = (idBoard: string) => {
        dispatch(redirectToBoard(idBoard));
    };

    return <SelectBoard boards={boards} idBoard={props.idBoard} handleRedirectToBoard={handleRedirectToBoard} />;
}
