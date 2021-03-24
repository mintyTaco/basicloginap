import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLoginActions } from "../redux/actions/loginActions";
import { useHistory } from "react-router";
import { alertActions } from "../redux/actions/alertActions";
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(6),
  },
}));

export const Login = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const alert = useSelector((state) => state.alert);
  const loggingIn = useSelector((state) => state.authentication.loggingIn);
  const { username, password } = inputs;
  const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }, []);
  useEffect(() => {
    dispatch(userLoginActions.logout());
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (username && password) {
      console.log("Handle submit", username, password);
      dispatch(
        userLoginActions.login(username, password, { pathname: "/" }, history)
      );
    }
  };
  return (
    <Container className={classes.container} maxWidth="xs">
      <Paper variant={"outlined"}>
        {alert.message && <div>{`${alert.message}`}</div>}
        <form name="form" onSubmit={handleSubmit}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Username"
                    onChange={handleChange}
                    name="username"
                    size="small"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    onChange={handleChange}
                    name="password"
                    size="small"
                    type="password"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              xs={12}
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
                onClick={handleSubmit}
              >
                Log in
              </Button>
              <Button
                color="secondary"
                onClick={() => history.push("/register")}
                variant="contained"
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Login;
