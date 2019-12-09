import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { loadCardsForBoard } from "src/store/cards/actions";
import { loadingState } from "src/store/loadingState";
import Board from "src/models/board";
import Preloader from "src/components/Preloader/Preloader";

export default function LoadCardsContainer(props: { board: Board }) {
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(loadCardsForBoard(props.board.id));
    }, [props.board, dispatch]);

    switch (props.board.cardsLoadingState) {
        case loadingState.isNotLoaded:
        case loadingState.isLoading:
            return <Preloader />;
        case loadingState.isError:
            return <h1>Error loading cards</h1>;
    }

    return <></>;
}
