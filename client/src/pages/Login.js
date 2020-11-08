import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import '../style/App.css'

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
        <div className="page">
            <div className="createPost">
                <div className="uploadPost">
                    <h1>Login</h1>
                    <input type="text" placeholder="Username..." onChange={(e) => {
                        setUserName(e.target.value);
                    }} />
                    <input type="password" placeholder="Password..." onChange={(e) => {
                        setPassword(e.target.value);
                    }} />
                    <button onClick={login}>Login</button>
                    <div className="statusMsg">
                        {statusMsg}
                    </div>
                </div>
            </div>
        </div>
    )
}
