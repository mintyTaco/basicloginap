import {crudConstants} from "../actions/constants"

const initialState = {
  isPending: false,
  users: JSON.parse(localStorage.getItem("users")),
  error: ""
}

export const getAllUsers = (state = initialState, action ) => {
    
    console.log(initialState.users, "++++");

    switch (action.type) {
        case crudConstants.GET_USERS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case crudConstants.GET_USERS_SUCCESS:
          return Object.assign({}, state, {users: action.users, isPanding: false})
        case crudConstants.GET_USERS_FAILED:
          return Object.assign({}, state, {error: action.error, isPanding: false})
        default:
          return state;
      }
};