import { userConstants } from "./constants";
import { userServiceHandler } from "../../utils/userHandler";
import { alertActions } from "./alertActions";
const request = (user) => {
  return { type: userConstants.LOGIN_REQUEST, user };
};
const logout = () => {
  userServiceHandler.logout();
  return { type: userConstants.LOGOUT };
};
const login = (username, password, from, history) => {
  const success = (user) => {
    return { type: userConstants.LOGIN_SUCCESS, user };
  };
  const failure = (error) => {
    return { type: userConstants.LOGIN_FAILURE, error };
  };
  return (dispatch) => {
    dispatch(request({ username }));
    userServiceHandler.login(username, password).then(
      (user) => {
        dispatch(success(user));
        history.push(from);
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
};
export const userLoginActions = { login, logout };
