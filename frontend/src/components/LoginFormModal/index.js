import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import { NavLink } from 'react-router-dom'; 
import LoginForm from './LoginForm';
import '../Navigation/Navigation.css'; 

function LoginFormModal() {
    const [showModal, setShowModal] = useState(false); 

    return (
        <>
            <button onClick={() => setShowModal(true)} className={"nav__login-button"}>
                Log In
            </button>
            <Modal open={showModal} onClose={() => setShowModal(false)}>
                <LoginForm />
            </Modal>
        </>
    );
}

export default LoginFormModal;

