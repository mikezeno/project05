import {USER_LOGGEDIN, USER_LOGGEDOUT } from '../Actions/actionTypes'

export const userReducer = (state = { logged: false, userId: 0 }, action) => {

  switch (action.type) {
    case USER_LOGGEDIN:
      return ({ logged: action.logged, userId: action.userId });
    case USER_LOGGEDOUT:
      return ({ logged: action.logged, userId: action.userId });
    default:
      return state;
  };
};
