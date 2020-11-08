import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import '../style/App.css'

export default function Register() {

    const [firstnameReg, setFirstNameReg] = useState('');
    const [lastnameReg, setLastNameReg] = useState('');
    const [usernameReg, setUserNameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');

    const register = () => {
        Axios.post('/user/register', {
            firstname: firstnameReg,
            lastname: lastnameReg,
            username: usernameReg,
            password: passwordReg
        }).then((resp) => {
            console.log(resp.data);
        });
    };

    return (
        <div className="page">
            <div className="createPost">
                <div className="uploadPost">
                    <h1>Registration</h1>
                    <label>First Name</label>
                    <input type="text" onChange={(e) => {
                        setFirstNameReg(e.target.value);
                    }} />
                    <label>Last Name</label>
                    <input type="text" onChange={(e) => {
                        setLastNameReg(e.target.value);
                    }} />
                    <label>Username</label>
                    <input type="text" onChange={(e) => {
                        setUserNameReg(e.target.value);
                    }} />
                    <label>Password</label>
                    <input type="text" onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }} />
                    <button onClick={register}>Register</button>
                </div>
            </div>
        </div>
    )
}
