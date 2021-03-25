import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginActions } from "../../redux/actions/loginActions";
import { useHistory } from "react-router";
import { alertActions } from "../../redux/actions/alertActions";
import { LoginForm } from "./loginForm";
// TODO add spinner for logginIn state
// TODO style BE alerts
export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useSelector((state) => state.alert);
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  // useEffect(() => {
  //   history.listen((location, action) => {
  //     dispatch(alertActions.clear());
  //   });
  // }, []);
  useEffect(() => {
    dispatch(userLoginActions.logout());
  }, []);

  return (
    <>
      {/*{alert.message && <div>{`${alert.message}`}</div>}*/}
      <LoginForm />
    </>
  );
};

export default Login;
