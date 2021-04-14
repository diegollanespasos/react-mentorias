import React from 'react';
import './Modal.css';

const Modal = ( { title, message, isActivated }) => {
    return (
        <div className={`modal ${isActivated ? "activated" : "deactivated"}`}>
            <h1>{title}</h1>
            <h3>{message}</h3>
        </div>
    )
}

export default Modal;