import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@material-ui/core";

const SignUpComponent = () => {
  return <div>
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

  <div>
  <TextField
      label="Confirm Password"
      required={true}
      variant="filled"
      type="password"
      autoComplete="current-password"
      margin="dense"
    />
  </div>

    
    

    <div style={{margin:"40px"}}>
      <Button variant="contained" color="primary">
        Sign up
      </Button>
    </div>
</div>;
};

export default SignUpComponent;
