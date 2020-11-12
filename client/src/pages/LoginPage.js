import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import '../style/App.css'
import LockOpenIcon from '@material-ui/icons/LockOpen';

export default function Login() {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [statusMsg, setStatus] = useState('');

    const login = () => {
        console.log(username, password)

        Axios.post('/user/login', {
            username: username,
            password: password
        }).then((resp) => {
            console.log(resp.data);

            if (resp.data.message) {
                setStatus(resp.data.message);
            } else {
                setStatus(resp.data[0].username);
            }
        });
    };

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
                                <input type="text" placeholder="Username..." onChange={(e) => {
                                    setUserName(e.target.value);
                                }} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <input type="password" placeholder="Password..." onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
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
