import React from 'react'
import '../style/App.css'
import { NavData } from './NavData'
import { AskButton } from './AskButton'

export default function Nav() {
    return (
        <div className="sidenav sticky-offset">
            <ul className="navlist">
                {
                    NavData.map((val, key) => {
                        return (
                            <li className="navrow" id={window.location.pathname === val.link ? "active" : ""} key={key} onClick={() => { window.location.pathname = val.link }}>
                                <div id="icon">{val.icon}</div>
                                <div id="category">{val.title}</div>
                            </li>
                        )
                    })
                }
                {AskButton}
            </ul>
        </div>
    );
}
