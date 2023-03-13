import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";

const wordStyle = {
    fontFamily: "Rockwell",
    color: "rgb(210, 132, 33)",
    fontSize: "25px",
  };

const Login = () => {
  const [email, setEmail] =  useState("");
  const [password, setPassword] =  useState("");

  function submit( 
    email: string,
    password: string
){
    //do stuff upon form submission
  }
    
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      component="form"
      sx={{
        flexDirection: "column",
        p: 1,
        m: 1,
      }}
      noValidate
      autoComplete="off"
    >
      <div >
        <h2 style={wordStyle}> Login </h2>
        <form>

          {/* user email input textbox */}
          <label htmlFor="email">email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="johndoe@gmail.com" id="email" name="email"></input>
          <p></p>

          {/* user password input textbox */}
          <label htmlFor="password">password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="*******" id="password" name="password"></input>
          <p></p>

          {/* form submission button */}
          <Button variant="contained" onClick={() => submit(email, password)}>Login</Button>

        </form>
      </div>
    </Box>
    );
};

export default Login;