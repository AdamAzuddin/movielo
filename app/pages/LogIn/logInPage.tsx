import styles from "../../page.module.css";
import React from "react";
import { TextField } from "@mui/material";
import Typed from "react-typed";
import { createTheme } from "@material-ui/core/styles";
import { Button, ThemeProvider } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core";

const theme = createTheme({
  palette: {
    type: "dark",
  },
});

const LogInPageComponent = () => {
  return (
    <div>
      <h1>Log in to your account</h1>
      <h2>
        Discover thousands of movies and series <br/> from popular streaming services
        <br/> all at one place
      </h2>
      <div>
      <TextField
          label="Username"
          required={true}
          variant="filled"
          margin="dense"
        />
      </div>
      <div>
      <TextField
          label="Password"
          required={true}
          variant="filled"
          type="password"
          autoComplete="current-password"
          margin="dense"
        />
      </div>

        
        

        <div style={{margin:"40px"}}>
          <Button variant="contained" color="primary">
            Sign in
          </Button>
        </div>
    </div>
  );
};

export default LogInPageComponent;



      {/* <Typed
        strings={[
          "Discover thousands of movies and series",
          "From popular streaming services",
          "All at one place",
        ]}
        typeSpeed={150}
        backSpeed={100}
        
      /> */}
