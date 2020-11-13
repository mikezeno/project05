import React from 'react'
import '../style/App.css'
import { NavData } from './NavData'
import { useHistory, withRouter, Link } from 'react-router-dom';

export default function NavMenu() {
    let history = useHistory();
    return (
        <div className="sidenav sticky-offset">
            <ul className="navlist">
                {
                    NavData.map((val, key) => {
                        return (
                            <li className="navrow" key={key} id={window.location.pathname === val.link ? "active" : ""} onClick={() => { history.push(val.link) }}>
                                <div id="icon">{val.icon}</div>
                                <div id="category">{val.title}</div>

                            </li>
                        )
                    })
                }
                <Link id="askButton-li" className="navrow">
                    <button id="askButton" type="button" className="main-button btn btn-primary btn-lg btn-block" onClick={() => {
                        history.push('/app/ask')
                    }}>Ask</button>
                </Link>
            </ul>
        </div>
    );
}


// export default withRouter(NavMenu);