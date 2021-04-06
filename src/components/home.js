import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { userLoginActions } from "../redux/actions/loginActions";
import { Button } from "@material-ui/core";

export const Home = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  
  const logout = () => {
    dispatch(userLoginActions.logout());
    history.push("/");
  }

  return (
    <div>
      <h2>Home</h2>
            <Button
                color="secondary"
                onClick={logout}
                variant="contained"
            >
                Logout
            </Button>
    </div>
  );
};

export default Home;
