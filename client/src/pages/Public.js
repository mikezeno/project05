import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png'

export default function Public() {

    const sitelogo = logo

    return (
        <div className="container">
            <div className="landing-content">
                <div id="title">
                    <div className="row justify-content-center">
                        <img src={sitelogo} width="75" height="50" className="d-inline-block align-top" alt="Site logo" loading="lazy"></img>
                        <h1>AskHow</h1>
                    </div>
                </div>
                <div id="solgan">
                    <div className="row justify-content-center">
                        <h2>You ask, they answer.</h2>
                    </div>
                    <div className="row justify-content-center">
                        <h2>Answers to life's questions.</h2>
                    </div>
                </div>
                <div id="landing-nav">
                    <ul className="nav nav-pills nav-fill">
                        <li className="nav-item login">
                            <NavLink className="nav-link" activeClassName="active" style={{ textDecoration: 'none' }} to="/login">Sign In</NavLink>
                        </li>
                        <li className="nav-item register">
                            <NavLink className="nav-link" activeClassName="active" style={{ textDecoration: 'none' }} to="/register">Sing Up</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
