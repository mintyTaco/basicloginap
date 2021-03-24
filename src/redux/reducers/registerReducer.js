import { userConstants } from "../actions/constants";

const initialState = {};

export const registration = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.REGISTER_REQUEST:
      return {
        user: action.user
      };
    case userConstants.REGISTER_SUCCESS:
      return {
        user: action.user
      };
    case userConstants.REGISTER_FAILURE:
      return {};
    default:
      return state;
  }
};
