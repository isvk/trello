import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { loadCardsForBoard } from "src/store/cards/actions";
import { LoadingState } from "src/store/loadingState";
import Board from "src/models/board";
import Preloader from "src/components/Preloader/Preloader";

export default function LoadCardsContainer(props: { board: Board }) {
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(loadCardsForBoard(props.board.id));
    }, [props.board, dispatch]);

    switch (props.board.cardsLoadingState) {
        case LoadingState.isNotLoaded:
        case LoadingState.isLoading:
            return <Preloader />;
        case LoadingState.isError:
            return <h1>Error loading cards</h1>;
    }

    return <></>;
}
