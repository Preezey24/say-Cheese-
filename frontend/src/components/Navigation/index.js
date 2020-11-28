import React from 'react'; 
import { NavLink } from 'react-router-dom'; 
import { useSelector } from 'react-redux'; 
import ProfileButton from './ProfileButton'; 
import SearchBar from './SearchBar'
import './Navigation.css'; 

const Navigation = ({ isLoaded }) => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks; 
    if (sessionUser) {
        sessionLinks = (
            <>
                <div>
                    <ProfileButton user={sessionUser} />
                </div>
                <div className={"nav__div-search"}>
                    <SearchBar />
                </div>
            </>
        );
    } else {
        sessionLinks = (
            <div className={"nav__div-signin"}>
                <button className={"nav__login-button"}>
                    <NavLink to="/login">
                        Log In
                    </NavLink>
                </button>
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
                    <i class="fas fa-camera-retro"></i>
                </span>
            </div>
            )}
            {isLoaded && sessionLinks}
        </div>
    )
}

export default Navigation; 