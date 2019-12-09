import React from "react";
import { useParams } from "react-router";
import useCustomSelector from "src/hooks/useCustomSelector";
import { boardsGetBoardById, boardState } from "src/store/rootSelector";
import { loadingState } from "src/store/loadingState";
import LoadBoardsWithListsContainer from "src/components/LoadBoardsWithLists/LoadBoardsWithListsContainer";
import LoadCardsContainer from "src/components/LoadCards/LoadCardsContainer";

import BoardPage from "./BoardPage";

export default function BoardPageContainer() {
    const { idBoard } = useParams();

    const boards = useCustomSelector(boardState);
    const board = useCustomSelector(boardsGetBoardById, idBoard);

    if (board) {
        if (boards.boardsLoadingState === loadingState.isNotLoaded) {
            return <LoadBoardsWithListsContainer />;
        }

        if (board.cardsLoadingState === loadingState.isNotLoaded) {
            return <LoadCardsContainer board={board} />;
        }

        return <BoardPage idBoard={board.id} />;
    }

    return <h1>404</h1>;
}
