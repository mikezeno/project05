import React, { useEffect, useState } from 'react';
import '../style/App.css';
import { useHistory, Link } from 'react-router-dom';
import logo from '../images/logo.png'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {userLoggedOut } from '../redux/Actions/userActions';
import { useSelector, useDispatch } from 'react-redux'


export default function Header() {

    const sitelogo = logo
    let history = useHistory();
    const [loginStatus, setLoginStatus] = useState('');

    return (
        // site header
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <Link className="navbar-brand" to="/" onClick={ ()=> history.push('/') }>
                <img src={sitelogo} width="75" height="50" className="d-inline-block align-top" alt="Site logo" loading="lazy"></img>
                <span className="mb-0 h1">AskHow</span>
            </Link>
            <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarToggler">
                <ul className="navbar-nav ml-auto pr-2">
                    <li className="nav-item">
                        <div id="hello-user" className="nav-link disabled">Hello, <span id="user">User</span></div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" activeclassname="active" to="'/auth/front'" onClick={ ()=> history.push('/auth/front') }>Logout <ExitToAppIcon/></Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

