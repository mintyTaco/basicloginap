import React from "react";
import { RegisterForm } from "./registerForm";
import AlertNotification from "../alert/Alert"

export const Register = () => {
  return (
    <div>
      <AlertNotification/>
      <RegisterForm/>
    </div>
  );
};
