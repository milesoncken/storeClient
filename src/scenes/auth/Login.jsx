import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { shades } from "../../theme";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import { Navigate } from "react-router-dom";

import { useState } from "react";
import TextField from "@mui/material/TextField";
import { useLocalState } from "../../state/useLocalStorage";

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

function Login() {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [errors, setErrors] = useState();

  return (
    <Box zIndex={10} width='100%' m='100px auto'>
      <Box sx={{ width: "50%", margin: "100px auto" }}>
        <Typography variant='h2' sx={{ marginBottom: "15px" }}>
          Login
        </Typography>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            fetch("api/login", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: values.email,
                password: values.password,
              }),
            }).then((res) => {
              res.json().then((json) => {
                if (res.status.valueOf() === 400) {
                  setErrors(json);
                  console.log(json);
                } else {
                  setErrors(null);
                  setJwt(json);
                  <Navigate to={"/dashboard"} />;
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
                <Typography>{errors}</Typography>
              </Box>

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
                Login
              </Button>
              <Typography
                sx={{ color: shades.neutral[900], alignSelf: "center" }}>
                Dont have an account? <a href='/signup'>Sign Up</a>
              </Typography>
            </form>
          )}
        </Formik>
      </Box>
    </Box>
  );
}

export default Login;
