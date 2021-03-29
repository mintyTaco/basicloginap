import {
  Button,
  Container,
  CssBaseline,
  makeStyles,
  TextField,
  Typography,
  Grid
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { userRegisterActions } from "../../redux/actions/registerActions";
import { useFormik } from "formik";
import {React, useState} from "react";

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

  const [userLabel, setUserLabel] = useState("Username")

  const [labels, setLabels] = useState({
    username: 'Username', 
    password: 'Password', 
    confirmPassword: 'Confirm Password', 
    email: 'Email', 
    phone: 'Phone number'
  }) 
  
  const onSubmit = (values) => {
    dispatch(userRegisterActions.register(values, "/", history));
  };

  const getUserNameLabel = (error) => error ?? "Username";
  const getPasswordLabel = (error) => error ?? "Password";
  const getConfirmPasswordLabel = (error) => error ?? "Confirm Password";
  const getEmailLabel = (error) => error ?? "Email";
  

  const validate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!values.username) {
      errors.username = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (!values.confirmPassword){
      errors.confirmPassword = "Required"
    }
    if (values.password !== values.confirmPassword){
      errors.password = "Passwords not matching"
      errors.confirmPassword = "Passwords not matching"
    }
    
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
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
        
        <Container maxWidth="xs">
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <TextField
                  style={{ paddingBottom: "1rem" }}
                  label={getUserNameLabel(formik.errors.username)}
                  onChange={formik.handleChange}
                  error={!!formik.errors.username}
                  name="username"
                  value={formik.values.username}
                  size="small"
                  variant="outlined"
                />
                <TextField
                  style={{ paddingBottom: "1rem" }}
                  error={!!formik.errors.password}
                  value={formik.values.password}
                  label={getPasswordLabel(formik.errors.password)}
                  type={"password"}
                  onChange={formik.handleChange}
                  name="password"
                  size="small"
                  variant="outlined"
                />
                
                <TextField
                  style={{ paddingBottom: "1rem" }}
                  value={formik.values.website}
                  label="website"
                  type={"text"}
                  onChange={formik.handleChange}
                  name="website"
                  size="small"
                  variant="outlined"
                />
              </Grid>

              <Grid item xs={6}>
              <TextField
                  label={getEmailLabel(formik.errors.email)}
                  style={{ paddingBottom: "1rem" }}
                  error={!!formik.errors.email}
                  value={formik.values.email}
                  type={"text"}
                  onChange={formik.handleChange}
                  name="email"
                  size="small"
                  variant="outlined"
                />
                <TextField
                  style={{ paddingBottom: "1rem" }}
                  error={!!formik.errors.confirmPassword}
                  value={formik.values.confirmPassword}
                  label={getConfirmPasswordLabel(formik.errors.confirmPassword)}
                  type={"password"}
                  onChange={formik.handleChange}
                  name="confirmPassword"
                  size="small"
                  variant="outlined"
                />
                <TextField
                  style={{ paddingBottom: "1rem" }}
                  error={!!formik.values.phone}
                  value={formik.values.phone}
                  label="phone number"
                  type={"phone"}
                  onChange={formik.handleChange}
                  name="phone"
                  size="small"
                  variant="outlined"
                />    
              </Grid>
            </Grid>
        </Container>

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
