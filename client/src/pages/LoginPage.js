import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios'
import '../style/App.css'
import { useHistory } from 'react-router-dom';
import { userLoggedIn } from '../redux/Actions/userActions';
import { useDispatch } from 'react-redux'

export default function Login() {

    let history = useHistory();
    const dispatch = useDispatch();

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [statusMsg, setStatus] = useState('');

    const userInput = useRef();
    const passwordInput = useRef();

    useEffect(() => {
        userInput.current.focus();
    }, [userInput])

    const login = () => {
        setStatus('')
        if (username !== '' && password !== '') {
            Axios.post('/user/login', {
                username: username,
                password: password
            }).then((resp) => {
                console.log(resp.data);

                if (resp.data.message) {
                    setStatus(resp.data.message);
                } else {
                    let user = {
                        userid: resp.data[0].id,
                        username: resp.data[0].username,
                        firstname: resp.data[0].firstname,
                        lastname: resp.data[0].lastname,
                    }
                    dispatch(userLoggedIn(user));
                    console.log("Login Successful:" + resp.data[0].username);
                    history.push('/app')
                }
            });
        } else {
            userInput.current.value = '';
            passwordInput.current.value = '';
            userInput.current.focus();
            setStatus("Please fill out both fields")
        }
    };

    // handle enter key press
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            login();
        }
    }

    return (
        <div className="landing-content">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <h1>Login</h1>
                </div>
                <div className="row justify-content-center mr-5 pr-3">
                    <h5>Enter your username and password:</h5>
                </div>
                <div className="form">
                    <form>
                        <div className="form-row">
                            <div className="form-group col-lg-12">
                                <input type="text" placeholder="Username..." maxLength="25" ref={userInput} onChange={(e) => {
                                    setUserName(e.target.value);
                                }} required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <input type="password" placeholder="Password..." maxLength="25" ref={passwordInput} onKeyDown={handleKeyDown} onChange={(e) => {
                                    setPassword(e.target.value);
                                }} required/>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <button className="main-button btn btn-block btn-primary" type="button" onClick={login}>Login</button>
                                <div className="statusMsg">
                                    {statusMsg}
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
