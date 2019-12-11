import React from "react";
import useCustomSelector from "src/hooks/useCustomSelector";
import { boardState } from "src/store/rootSelector";
import { LoadingState } from "src/store/loadingState";
import LoadBoardsWithListsContainer from "src/components/LoadBoardsWithLists/LoadBoardsWithListsContainer";
import ListBoardsPage from "./ListBoardsPage";

export default function ListBoardsPageContainer() {
    const boards = useCustomSelector(boardState);

    if (boards.boardsLoadingState === LoadingState.isNotLoaded) {
        return <LoadBoardsWithListsContainer />;
    }

    return <ListBoardsPage boards={boards} />;
}
