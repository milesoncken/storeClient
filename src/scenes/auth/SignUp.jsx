import { Typography, Box, Button, AlertTitle } from "@mui/material";
import React from "react";
import { useState } from "react";
import { shades } from "../../theme";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";

import TextField from "@mui/material/TextField";

const handleFormSubmit = () => {
  console.log("submit form");
};

const loginSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum."),
});

function SignUp() {
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [errors, setErrors] = useState({});
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const navigate = useNavigate();

  return (
    <Box zIndex={10} width='100%' m='100px auto'>
      <Box sx={{ width: "50%", margin: "100px auto" }}>
        <Typography variant='h2' sx={{ marginBottom: "15px" }}>
          Sign Up
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            fetch("api/signup", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: values.email,
                password: values.password,
              }),
            }).then((res) => {
              res.json().then((json) => {
                console.log(json);
                if (res.status.valueOf() === 400) {
                  setErrors(json);
                } else {
                  setIsSignedUp(true);
                }
              });
            });
          }}
          validationSchema={loginSchema}>
          {({ handleChange, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                type='text'
                label='Email'
                name='email'
                onChange={handleChange}
                sx={{ gridColumn: "span 4", marginBottom: "15px" }}
              />
              <Box sx={{ marginBottom: "15px", color: "red" }}>
                <ErrorMessage name='email'></ErrorMessage>
                <Typography>{errors.email}</Typography>
              </Box>
              <TextField
                fullWidth
                type='password'
                label='Password'
                name='password'
                onChange={handleChange}
                sx={{ gridColumn: "span 4", marginBottom: "15px" }}
              />
              <Box sx={{ marginBottom: "15px", color: "red" }}>
                <ErrorMessage name='password'></ErrorMessage>
                <Typography>{errors.password}</Typography>

                {!isSignedUp ? (
                  <>
                    <Button
                      fullWidth
                      type='submit'
                      color='primary'
                      variant='contained'
                      sx={{
                        backgroundColor: shades.primary[400],
                        boxShadow: "none",
                        color: "white",
                        borderRadius: 0,
                        padding: "15px 40px",
                      }}>
                      Sign Up
                    </Button>
                    <Typography
                      sx={{ color: shades.neutral[900], alignSelf: "center" }}>
                      Already have an account? <a href='/login'>Log In</a>
                    </Typography>
                  </>
                ) : (
                  <Alert severity='success'>
                    <AlertTitle>Success</AlertTitle>
                    You have successfully signed up —{" "}
                    <a href={"/login"}>Continue to the login page to log in</a>
                  </Alert>
                )}
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default SignUp;
