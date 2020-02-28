import React from "react";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { logoutByToken } from "src/store/auth/actions";

import "./Logout.scss";

export default function Logout() {
    const dispatch = useCustomDispatch();

    const token = localStorage.getItem("token") || "";

    return (
        <button className="logout" onClick={() => dispatch(logoutByToken(token))}>
            Выход
        </button>
    );
}
