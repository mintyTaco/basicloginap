import { crudConstants } from "../constants";
import { userServiceHandler } from "../../../utils/userHandler";
import { alertActions } from "../alertActions";

export const getAllActions = () => {
  
  const request = (users) => {
    return { type: crudConstants.GET_USERS_PENDING, users };
  };
  const success = (users) => { 
    return { type: crudConstants.GET_USERS_SUCCESS, users };
  };
  const failure = (error) => {
    return { type: crudConstants.GET_USERS_FAILED, error };
  };
  return (dispatch) => {
    
    dispatch(request)

    userServiceHandler.getAll()
    .then(
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
export default getAllActions;
