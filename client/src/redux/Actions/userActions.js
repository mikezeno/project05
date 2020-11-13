import {USER_LOGGEDIN, USER_LOGGEDOUT } from './actionTypes'

// USER_LOGGEDIN
export const userLoggedIn = (id) => {
    return {
        type: USER_LOGGEDIN,
        logged: true,
        userId: id
    }
}


// USER_LOGGEDOUT
export const userLoggedOut = () => {
    return {
        type: USER_LOGGEDOUT,
        logged: false,
        userId: 0
    }
}