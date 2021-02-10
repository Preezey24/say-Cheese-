import React from 'react'; 
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import './Navigation.css'; 

const DemoUser = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        return dispatch(sessionActions.login({credential: "demo@user.io", password: "password"}))
    }

    return (
        <button className={"nav__signup-button"} onClick={handleClick}>
            Demo User
        </button>
    )
}

export default DemoUser; 