
import {Formik, Form, Field} from 'formik';

import {
  fieldToTextField,
  TextFieldProps,
  Select,
  Switch,
} from 'formik-material-ui';

import React, { useState, useEffect } from "react";
import { Button, Container, Grid, Paper, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userRegisterActions } from "../redux/actions/registerActions";
export const Register = () => {

  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({});
  const history = useHistory();

  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
        email: '',
        phone: '',
        website: '',
        retypePassword: ''
      }}
      // validate={ values => {
      //   const errors = {};
      //   if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
      //     errors.email = 'invalid email';
      //   }
      //   // if(values.password !== values.retypePassword){
      //   //   alert('password not matching')
      //   // }
      //   return errors;
      // }}
      onSubmit={(values, {setSubmitting}) => {
        // setTimeout(() => {
        //   setSubmitting(false);
        //   alert(JSON.stringify(values, null, 2));
        // }, 500);
        setSubmitting(false);
        setInputs(values);
        if (values.password != values.retypePassword){
          alert('passwords are not matching');
        }
        console.log(values.username)
        if (values.username && values.password && values.email) {
          dispatch(
            userRegisterActions.register(values, { pathname: "/" }, history)
          );
        }
        else{
          alert('please fill the required data')
        }

      }}
    >
      {({submitForm, isSubmitting, touched, errors}) => (
      
      <Container  maxWidth="xs">
        <Paper variant={"outlined"}>
          <Form >
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Field
                      required
                      label="Username"
                      component={TextField}
                      name="username"
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Field
                      required
                      label="Password"
                      component={TextField}
                      name="password"
                      size="small"
                      type="password"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      label="website"
                      name="website"
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={6}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Field
                      required
                      label="Email"
                      component={TextField}
                      name="email"
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Field
                      required
                      label="Re-type Password"
                      component={TextField}
                      name="password"
                      size="small"
                      type="password"
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Field
                      component={TextField}
                      label="Phone"
                      name="phone"
                      size="small"
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >

                <Grid item xs={6}>
                  <Button color="primary" variant="contained" href="\login">
                    Back
                  </Button>
                </Grid>
                
                <Grid item xs={6}>
                  <Button color="secondary" variant="contained" disabled={isSubmitting} onClick={submitForm}>
                    Create New Accont
                    
                  </Button>
                </Grid>

              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Container> 

    )}
    </Formik>
  );
};

export default Register;
