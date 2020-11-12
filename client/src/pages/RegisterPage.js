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
        <div className="landing-content">
            <div className="container">
                <div className="row">
                    <div className="col">
                <div>
                    <div className="row justify-content-center mb-5">
                        <h1>Register</h1>
                    </div>
                    <div className="row justify-content-center mr-5 pr-5">
                        <h5 className="mr-5 pr-4">Let's create an account:</h5>
                    </div>
                    <div className="form">
                        <form>

                            <div className="form-row">
                                <div className="form-group col-lg-12">
                                    <input type="text" placeholder="First Name" maxLength="25" onChange={(e) => {
                                        let name = e.target.value;
                                        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
                                        setFirstNameReg(nameCapitalized);
                                    }} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-lg-12">
                                    <input type="text" placeholder="Last Name" maxLength="25" onChange={(e) => {
                                        let name = e.target.value;
                                        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1)
                                        setLastNameReg(nameCapitalized);
                                    }} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-lg-12">
                                    <input type="text" placeholder="Username" maxLength="25" onChange={(e) => {
                                        setUserNameReg(e.target.value);
                                    }} />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-lg-12">
                                    <input type="password" placeholder="Password" maxLength="25" onChange={(e) => {
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
                                    <button className="main-button btn btn-block btn-primary" type="button" onClick={register}>Login</button>
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

            </div>
        </div>

    )
}
