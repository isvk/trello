import React from "react";
import ReactDOM from "react-dom";

import "./Preloader.scss";

export default function Preloader() {
    const domElement = document.getElementById("preloader-root");

    if (domElement) {
        return ReactDOM.createPortal(
            <div id="preloader">
                <div className="preloader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>,
            domElement
        );
    } else return <div></div>;
}
/*
export default class Preloader2 extends React.Component {
    constructor(props) {
        super(props)
        this.modalRoot = document.getElementById('preloader-root');
    }

    render() {
        return ReactDOM.createPortal(
            <div id="preloader">
                <div className="preloader">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>,
            this.modalRoot
        );
    }
}
/*
<Preloader title="Какой-то текст"/>
*/
