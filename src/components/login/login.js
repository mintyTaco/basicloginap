import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  const alert = useSelector((state) => state.alert);
  const loggingIn = useSelector((state) => state.authentication.loggingIn);

  useEffect(() => {
    console.log(alert, ' useEffect');
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }, []);

  useEffect(() => {
    console.log(alert, ' logout')
    dispatch(userLoginActions.logout());
  }, []);

  return (
      <div>
        <AlertNotification />
        <LoginForm />
      </div>
  );
};

export default Login;
