import React, { useEffect } from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import useCustomSelector from "src/hooks/useCustomSelector";
import { boardState } from "src/store/rootSelector";
import { LoadingState } from "src/store/loadingState";
import { loadBoards } from "src/store/boards/actions";
import Preloader from "src/components/Preloader/Preloader";

export default function LoadBoardsWithListsContainer() {
    const dispatch = useCustomDispatch();
    const boards = useCustomSelector(boardState);

    useEffect(() => {
        dispatch(loadBoards());
    }, [dispatch]);

    switch (boards.boardsLoadingState) {
        case LoadingState.isNotLoaded:
        case LoadingState.isLoading:
            return <Preloader />;
        case LoadingState.isError:
            return <h1>Error loading boards</h1>;
    }

    return <></>;
}
