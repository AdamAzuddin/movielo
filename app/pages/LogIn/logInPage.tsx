import styles from "../../page.module.css";
import React from "react";
import { TextField } from "@mui/material";
import Typed from "react-typed";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const LogInPageComponent = () => {
  return (
    <div
    >
      <h1>Log in to your account</h1>
      <h2>
        Discover thousands of movies and series from popular streaming services
        all at one place
      </h2>
      <TextField
        label="Username"
        required={true}
        variant="filled"
        
      />

      {/* <Typed
        strings={[
          "Discover thousands of movies and series",
          "From popular streaming services",
          "All at one place",
        ]}
        typeSpeed={150}
        backSpeed={100}
        
      /> */}
    </div>
  );
};

export default LogInPageComponent;
