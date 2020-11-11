import React, { useState, useEffect } from 'react';
import Axios from 'axios'
import '../style/App.css'

export default function Register() {

    const [firstnameReg, setFirstNameReg] = useState('');
    const [lastnameReg, setLastNameReg] = useState('');
    const [usernameReg, setUserNameReg] = useState('');
    const [passwordReg, setPasswordReg] = useState('');
    const [repasswordReg, setRePasswordReg] = useState('')
    const [statusMsg, setStatus] = useState('');

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
            <div className="container">
                <div className="landing-content">
                    <div className="row justify-content-center mb-5">
                        <h1>Register</h1>
                    </div>
                    <div className="row justify-content-center mr-5 pr-3">

                    </div>
                    <div className="form">
                        <form>
                            <h5>Let's create an account:</h5>
                            <div className="form-row">
                                <div className="form-group col-lg-12">
                                    <input type="text" placeholder="First Name" onChange={(e) => {
                                        let name = e.target.value;
                                        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
                                        setFirstNameReg(nameCapitalized);
                                    }} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-lg-12">
                                    <input type="text" placeholder="Last Name" onChange={(e) => {
                                        let name = e.target.value;
                                        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
                                        setLastNameReg(nameCapitalized);
                                    }} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-lg-12">
                                    <input type="text" placeholder="Username" onChange={(e) => {
                                        setUserNameReg(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-lg-12">
                                    <input type="password" placeholder="Password" onChange={(e) => {
                                        setPasswordReg(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-lg-12">
                                    <input type="password" placeholder="Re-enter Password" onChange={(e) => {
                                        setRePasswordReg(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <button className="btn btn-block btn-primary" type="button" onClick={register}>Login</button>
                                    <div className="statusMsg">
                                        {statusMsg}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
