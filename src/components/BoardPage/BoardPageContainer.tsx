import React from "react";
import { useParams } from "react-router";
import useCustomSelector from "src/hooks/useCustomSelector";
import { boardsGetBoardById, boardsGetBoardsLoadingState } from "src/store/rootSelector";
import { loadingState } from "src/store/loadingState";
import LoadBoardsWithListsContainer from "src/components/LoadBoardsWithLists/LoadBoardsWithListsContainer";
import LoadCardsContainer from "src/components/LoadCards/LoadCardsContainer";

import BoardPage from "./BoardPage";

export default function BoardPageContainer() {
    const { idBoard } = useParams();
    const boardsLoading = useCustomSelector(boardsGetBoardsLoadingState);
    const board = useCustomSelector(boardsGetBoardById, idBoard);

    if (boardsLoading === loadingState.isNotLoaded) {
        return <LoadBoardsWithListsContainer />;
    }

    if (board) {
        if (board.cardsLoadingState === loadingState.isNotLoaded) {
            return <LoadCardsContainer board={board} />;
        }

        return <BoardPage idBoard={board.id} />;
    }

    return <h1>404</h1>;
}
