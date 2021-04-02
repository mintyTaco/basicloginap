import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginActions } from "../../redux/actions/loginActions";
import { useHistory } from "react-router";
import { alertActions } from "../../redux/actions/alertActions";
import { LoginForm } from "./loginForm";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from "@material-ui/lab/Alert";
// TODO add spinner for logginIn state
// TODO style BE alerts

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const alert = useSelector((state) => state.alert);
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const [open, setOpen] = useState(false);

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

  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    if(alert.message !== undefined)
      setOpen(true);
  }, [alert.message])
  
  const handleSeverity = () => {
    if(alert.type == 'alert-success'){
      return 'success';
    }
    if(alert.type == 'alert-danger'){
      return 'error';
    }
    console.log('check types');
  }

  return (
      <div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={handleSeverity()}>
        {`${alert.message}`}
        </Alert>
      </Snackbar>
      <LoginForm />
      </div>
  );
};

export default Login;
