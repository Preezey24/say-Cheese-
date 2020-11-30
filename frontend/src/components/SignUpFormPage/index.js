import React, { useState } from "react"; 
import { useDispatch, useSelector } from "react-redux"; 
import { Redirect } from "react-router-dom"; 
import * as sessionActions from "../../store/session"; 
import './SignUpForm.css'; 

function SignUpFormPage() {
    const dispatch = useDispatch(); 
    const sessionUser = useSelector((state) => state.session.user); 
    const [email, setEmail] = useState(""); 
    const [username, setUsername] = useState(""); 
    const [password, setPassword] = useState(""); 
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [errors, setErrors] = useState([]); 

    if (sessionUser) return <Redirect to='/' />; 

    const handleSubmit = (e) => {
        e.preventDefault(); 
        if (password === confirmPassword) {
            setErrors([]); 
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(res => {
                    if (res.data && res.data.errors) setErrors(res.data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    }

    return (
        <div className={"bg__signup"}>
            <div className={"module"}>    
                <div className={"form__heading"}>
                    <p>Get immediate access to <span className={"saycheese"}>say Cheese!!!</span></p> 
                </div>
                <form onSubmit={handleSubmit} className={"form"}>
                    <ul>
                        {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                    </ul>
                    <div className={"form__inputs"}>
                        <label className={"form__label"}>
                            Email
                            <input 
                                type="text"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className={"textbox"}
                            />
                        </label>
                    </div>
                    <div  className={"form__inputs"}>
                        <label className={"form__label"}>
                            Username 
                            <input 
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                className={"textbox"}
                            />
                        </label>
                    </div>
                    <div  className={"form__inputs"}>
                        <label className={"form__label"}>
                            Password
                            <input 
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className={"textbox"}
                            />
                        </label>
                    </div>
                    <div className={"form__inputs"}>
                        <label className={"form__label"}>
                            Confirm Password 
                            <input 
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className={"textbox"}
                            />
                        </label>
                    </div>
                    <button type="submit" className={"button"}>Sign Up</button>
                </form>
            </div>
        </div>
    )
};

export default SignUpFormPage; 