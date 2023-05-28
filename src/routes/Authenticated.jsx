import React, { useEffect } from "react";
import { useLocalState } from "../state/useLocalStorage";
import { Navigate } from "react-router-dom";
import { Typography } from "@mui/material";
import { useState } from "react";

function Authenticated({ children }) {
  const [jwt, setJwt] = useLocalState("", "jwt");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const validJWT = (token) => {
    if (token !== null) {
      console.log("Sending Access Token to auth server...");
      console.log(token);
      fetch("/api/verify", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (Object.values(data)[0] === "invalid") {
            console.log("invalid jwt send user to login");
            // <Navigate to={"/login"} />;
            setIsAuthenticated(false);
          } else {
            console.log("Valid user got back: ");
            console.log(data);
            console.log("keep them on page ");
            setIsAuthenticated(true);
          }
        })
        .catch((err) => {
          // console.log(accessToken);
          console.log(err.message);
          setIsAuthenticated(false);
        });
    } else {
      console.log("No accessToken cached, waiting for user");
      setIsAuthenticated(false);
    }
  };

  return isAuthenticated ? (
    children
  ) : (
    <>
      {validJWT(jwt)} <Typography>Loading</Typography>
    </>
  );
}

export default Authenticated;
