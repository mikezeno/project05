import React, { useState, useEffect, useRef } from 'react';

export default function TestLogin() {

    const username = "mzeno";
    const password = "password";


    const [usernameState, setUsername] = useState('');
    const [passwordState, setPassword] = useState('');
    const [loggedOut, setLoggedOut] = useState(true);
    const [loginStatus, setLoginStatus] = useState('')

    const userInput = useRef();
    const passwordInput = useRef();

    useEffect( ()=> {
        userInput.current.focus();
    }, [userInput])


    const login = () => {
        if (usernameState === username && passwordState === password) {
            setLoggedOut(false);
            setLoginStatus("Authorization Successful")

        } else {
            userInput.current.value = '';
            passwordInput.current.value = '';
            userInput.current.focus();
            setLoginStatus("Invalid username or password. Please try again.")
        }
    }


    return (
        <div className="page">
            {loggedOut &&
                <div className="content">
                    <form className="form">
                        <h2>Login</h2>
                        <input type="text" placeholder="Username..." ref={userInput} onChange={(e) => {
                            setUsername(e.target.value);
                        }} />
                        <input type="password" placeholder="Password..." ref={passwordInput} onChange={(e) => {
                            setPassword(e.target.value);
                        }} />

                    </form>
                    <button onClick={login}>Submit</button>
                </div>
            }
            <div className="content">
                <h5>{loginStatus}</h5>
            </div>
        </div>
    )
}
