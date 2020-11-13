import {USER_LOGGEDIN, USER_LOGGEDOUT } from './actionTypes'

// USER_LOGGEDIN
export const userLoggedIn = () => {
    return {
        type: USER_LOGGEDIN,
        logged: true
    }
}


// USER_LOGGEDOUT
export const userLoggedOut = () => {
    return {
        type: USER_LOGGEDOUT,
        logged: false
    }
}