import {USER_LOGGEDIN, USER_LOGGEDOUT } from '../Actions/actionTypes'

export const userReducer = (state = { logged: false }, action) => {

  switch (action.type) {
    case USER_LOGGEDIN:
      return ({ logged: action.logged });
    case USER_LOGGEDIN:
      return ({ logged: action.logged });
    default:
      return state;
  };
};
