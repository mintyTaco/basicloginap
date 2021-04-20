import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
// import { useSelector } from "react-redux";
import { userLoginActions } from "../../redux/actions/loginActions";
import { useHistory } from "react-router";
import { alertActions } from "../../redux/actions/alertActions";
import { LoginForm } from "./loginForm";
import AlertNotification from "../alert/Alert";
// TODO add spinner for logginIn state
// TODO style BE 

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  // const alert = useSelector((state) => state.alert);
  // const loggingIn = useSelector((state) => state.authentication.loggingIn);

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }, [dispatch, history]);

  useEffect(() => {
    dispatch(userLoginActions.logout());
  }, [dispatch]);

  return (
      <div>
        <AlertNotification />
        <LoginForm />
      </div>
  );
};

export default Login;
