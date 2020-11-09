import React from 'react';
import '../style/App.css';
import { NavLink } from 'react-router-dom';

export default function Nav() {

    const logo = require('../images/logo.png');

    return (
        // site header
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <span className="navbar-brand">
                <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="" loading="lazy"></img>
                <span className="mb-0 h1">Daily Planner</span>
            </span>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <NavLink exact className="nav-link" activeClassName="active" style={{ textDecoration: 'none' }} to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" style={{ textDecoration: 'none' }} to="/components/tasks">Tasks</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" activeClassName="active" style={{ textDecoration: 'none' }} to="/components/contacts">Contacts</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

