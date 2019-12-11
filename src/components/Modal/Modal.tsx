import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

import "./Modal.scss";

interface IModalProps {
    title: string;
    onClose(): void;
    children: ReactNode;
}

export default function Modal(props: IModalProps) {
    const domElement = document.getElementById("modal-root");

    if (domElement) {
        return ReactDOM.createPortal(
            <div id="openModal" className="modal">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3 className="modal-title">{props.title}</h3>
                            <a href="#close" title="Close" className="close" onClick={props.onClose}>
                                ×
                            </a>
                        </div>
                        <div className="modal-body">{props.children}</div>
                    </div>
                </div>
            </div>,
            domElement
        );
    } else return <></>;
}
