import React from 'react'; 
import { NavLink } from 'react-router-dom'; 
import { useSelector } from 'react-redux'; 
import ProfileButton from './ProfileButton'; 
import SearchBar from './SearchBar'
import './Navigation.css'; 
import LoginFormModal from '../LoginFormModal'; 

const Navigation = () => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks; 
    if (sessionUser) {
        sessionLinks = (
            <>
                <ProfileButton user={sessionUser} />
                <div className={"nav__div-search"}>
                    <SearchBar />
                </div>
            </>
        );
    } else {
        sessionLinks = (
            <div className={"nav__div-signin"}>
                <LoginFormModal />
                <button className={"nav__signup-button"}>
                    <NavLink to="/signup">
                        Sign Up 
                    </NavLink>
                </button>
            </div>
        )
    }
    return (
        <div className={"nav__container"}>
            <div className={"nav__div-home"}>
                <button className={"nav__home-button"}>
                    <NavLink exact to="/" >
                        Home
                    </NavLink>
                </button>
            </div>
            {!sessionUser && (
            <div className={"nav__div-title"}>
                    say Cheese!!!
                <span className={"nav__title"}>
                    <i className="fas fa-camera-retro"></i>
                </span>
            </div>
            )}
            {sessionLinks}
        </div>
    )
}

export default Navigation; 