import { crudConstants } from "../constants";
import { userServiceHandler } from "../../../utils/userHandler";
import { alertActions } from "../alertActions";

export const getAll = () => {
  const success = (users) => {
    return { type: crudConstants.GET_USERS_SUCCESS, users };
  };
  const failure = (error) => {
    return { type: crudConstants.GET_USERS_FAILED, error };
  };
  return (dispatch) => {
    userServiceHandler.getAll().then(
      (users) => {
        dispatch(success(users));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };
};
export const getAllActions = { getAll };
