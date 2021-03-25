import { userConstants } from "./constants";
import { userServiceHandler } from "../../utils/userHandler";
const request = (user) => {
  return { type: userConstants.REGISTER_REQUEST, user };
};

function register(user, path, history) {
  const success = (user) => {
    return { type: userConstants.REGISTER_SUCCESS, user };
  };
  const failure = (error) => {
    return { type: userConstants.REGISTER_FAILURE, error };
  };
  return (dispatch) => {
    dispatch(request(user));

    userServiceHandler.register(user).then(
      (user) => {
        dispatch(success());
        history.push(path);
        //  dispatch(alertActions.success("Registration successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        //   dispatch(alertActions.error(error.toString()));
      }
    );
  };
}

export const userRegisterActions = { register };
