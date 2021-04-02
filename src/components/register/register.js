import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { userLoginActions } from "../../redux/actions/loginActions";
import { RegisterForm } from "./registerForm";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from "@material-ui/lab/Alert";

const Alert = (props) => <MuiAlert elevation={6} variant="filled" {...props} />;

export const Register = () => {

  const alert = useSelector((state) => state.alert);
  const [open, setOpen] = useState(false);

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
      <RegisterForm/>
      </div>
  );
};
