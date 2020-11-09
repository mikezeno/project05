import React from 'react';
//import Axios from 'axios'
import '../style/App.css'

export default function Home() {
    return (
        <div className="page">
            <div className="content">
                <h1>Forum App</h1>
                <form classNameName="form-inline">
                    <div className="form-group mb-2">
                        <button type="button" class="btn btn-primary btn-lg">Sign In</button>
                        <button type="button" class="btn btn-secondary btn-lg">Sign Up</button>
                    </div>
                    <button type="submit" className="btn btn-primary mb-2">Confirm identity</button>
                </form>
            </div>
        </div>
    )
}
