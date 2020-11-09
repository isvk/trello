import React from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { redirectToApiForGetToken } from "src/store/auth/actions";

export default function Auth() {
    const dispatch = useCustomDispatch();

    return (
        <button className="btn-auth" onClick={() => dispatch(redirectToApiForGetToken())}>
            подтверждения доступа
        </button>
    );
}
