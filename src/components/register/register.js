import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { userLoginActions } from "../../redux/actions/loginActions";
import { RegisterForm } from "./registerForm";

export const Register = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userLoginActions.logout());
  }, []);

  return (
    <>
      <RegisterForm />
    </>
  );
};
