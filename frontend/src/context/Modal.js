import React, { useContext, useRef, useState, useEffect } from 'react';
import './Modal.css'; 

export function Modal({ open, children, onClose }) {
    if (!open) return null; 

    return (
        <>
            <div className={"modal__overlay"}/>
            <div className={"modal__styles"}>
                {children}
                <button onClick={onClose} className={"button__modal"}>Exit Login</button>
            </div>
        </>
    )
}