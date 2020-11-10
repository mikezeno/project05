import React from 'react';
import '../style/App.css';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo.png'

export default function Header() {

    const sitelogo = logo

    return (
        // site header
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">
                <img src={sitelogo} width="75" height="50" className="d-inline-block align-top" alt="Site logo" loading="lazy"></img>
                <span className="mb-0 h1">AskHow</span>
            </span>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <div id="hello-user" className="nav-link disabled">Hello, <span id="user">User</span></div>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" style={{ textDecoration: 'none' }} to="/login">Logout</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

