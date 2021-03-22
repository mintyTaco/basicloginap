import {
  Button,
  Container,
  Grid,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
//TODO : style login component, functionality
const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(6),
  },
}));

export const Login = () => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="xs">
      <Paper variant={"contained"}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  size="small"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
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
            <Button color="primary" type="submit" variant="contained">
              Log in
            </Button>
            <Button color="secondary" type="submit" variant="contained">
              Register
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Login;
