import React, { useEffect } from "react";
import { Location } from "history";
import useCustomDispatch from "src/hooks/useCustomDispatch";
import { loginByToken } from "src/store/auth/actions";
import Preloader from "src/components/Preloader/Preloader";

export default function AuthSuccess(props: { location: Location }) {
    const dispatch = useCustomDispatch();

    useEffect(() => {
        const token = props.location.hash.replace("#token=", "");
        dispatch(loginByToken(token));
    }, []);

    return <Preloader />;
}
