import {
  Button,
  Container,
  CssBaseline,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { userRegisterActions } from "../../redux/actions/registerActions";
import { useFormik } from "formik";
import React from "react";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
export const RegisterForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValues = {
    username: "",
    password: "",
    email: "",
    phone: "",
    website: "",
    confirmPassword: "",
  };
  const onSubmit = (values) => {
    dispatch(userRegisterActions.register(values, "/", history));
  };
  const validate = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  return (
    <Container maxWidth={"xs"}>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component={"h1"} variant={"h3"}>
          {"REGISTER"}
        </Typography>
        <form onSubmit={formik.handleSubmit} className={classes.form}>
          <TextField
            style={{ paddingBottom: "1rem" }}
            label="Username"
            onChange={formik.handleChange}
            error={formik.errors.username}
            name="username"
            value={formik.values.username}
            size="small"
            variant="outlined"
          />
          <TextField
            style={{ paddingBottom: "1rem" }}
            error={formik.errors.password}
            value={formik.values.password}
            label="Password"
            type={"password"}
            onChange={formik.handleChange}
            name="password"
            size="small"
            variant="outlined"
          />
          <TextField
            style={{ paddingBottom: "1rem" }}
            error={formik.errors.confirmPassword}
            value={formik.values.confirmPassword}
            label="confirmPassword"
            type={"password"}
            onChange={formik.handleChange}
            name="confirmPassword"
            size="small"
            variant="outlined"
          />
          <TextField
            style={{ paddingBottom: "1rem" }}
            error={formik.errors.email}
            value={formik.values.email}
            label="email"
            type={"text"}
            onChange={formik.handleChange}
            name="email"
            size="small"
            variant="outlined"
          />

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Button
              color="primary"
              type="submit"
              variant="contained"
              className={classes.submit}
            >
              REGISTER
            </Button>
            <Button
              color="secondary"
              onClick={() => {
                history.push("/register");
              }}
              variant="contained"
              className={classes.submit}
            >
              Register
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
};
