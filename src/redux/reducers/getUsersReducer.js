import {crudConstants} from "../actions/constants"

let users = JSON.parse(localStorage.getItem("users"));
const initialState = users ? { loggedIn: true, users } : {};

export const getAllUsers = (state = initialState, action) => {
    
    switch (action.type) {
        case crudConstants.GET_USERS_SUCCESS:
          return {
              users: action.users
          };
        case crudConstants.GET_USERS_FAILED:
          return {};
        default:
          return state;
      }
};