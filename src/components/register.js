
import React from "react";
import { useDispatch } from "react-redux";
import { userRegisterActions } from "../redux/actions/registerActions";
import { useHistory } from "react-router";

import {Formik, Form, Field} from 'formik';

import {
  TextField,
} from 'formik-material-ui';

import { Button, Container, Grid, Paper } from "@material-ui/core";

const isNumber = (value) => !isNaN(value)

export const Register = () => {

  const dispatch = useDispatch();
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
      validate={ values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
          errors.email = 'invalid email';
        }
        if (!values.password) {
          errors.password = 'Required';
        }
        else if(!values.retypePassword){
          errors.retypePassword = 'Required';
        }
        else if(values.password !== values.retypePassword){
          errors.password = 'Passwors are not matching';
          errors.retypePassword = 'Passwors are not matching';
        }
        if (values.phone && !isNumber(values.phone))
          errors.phone = 'invalid phone number'
        return errors;
      }}

      validator={() => ({})}

      onSubmit={(values, {setSubmitting}) => {
        
        console.log(values)
        
        setTimeout(() => {
          setSubmitting(false);
          // alert(JSON.stringify(values, null, 2));
        }, 500);
        dispatch(
          userRegisterActions.register(values, { pathname: "/" }, history)
        );        
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
                      component={TextField}
                      label="Username"
                      name="username"
                      type="username"
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
                      name="retypePassword"
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
