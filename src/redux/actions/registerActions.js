import { userConstants } from "./constants";
import { userServiceHandler } from "../../utils/userHandler";
const request = (user) => {
  return { type: userConstants.REGISTER_REQUEST, user };
};

const register = (user, path, history) => {
  console.log('register')
  const success = (user) => {
    return { type: userConstants.REGISTER_SUCCESS, user };
  };
  const failure = (error) => {
    return { type: userConstants.REGISTER_FAILURE, error };
  };
  return (dispatch) => {
    dispatch(request( user ));
    userServiceHandler.register(user).then(
      (user) => {
        console.log('added')
        dispatch(success(user));
        history.push(path);
      },
      (error) => {
        dispatch(failure(error.toString()));
      }
    );
  };
};
export const userRegisterActions = { register };
