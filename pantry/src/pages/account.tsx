import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { SignUpInterface } from "./../interfaces";

const wordStyle = {
    fontFamily: "Rockwell",
    color: "rgb(210, 132, 33)",
    fontSize: "25px",
  };

const SignUp = () => {
  const [username, setUsername] =  useState("");
  const [email, setEmail] =  useState("");
  const [password, setPassword] =  useState("");

  const [myArray, setMyArray] = useState<SignUpInterface[]>([]);
                
  function addUser( 
        tempUsername: string,
        tempEmail: string,
        tempPassword: string
  ){
        let newUser = { username: tempUsername, email: tempEmail, password: tempPassword };
        myArray.push(newUser);
  }
    
  return (
    <Box // TODO: change to Grid, makes it easier to format spacing & items in Grid
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
        {/* <h1 style={wordStyle}>Account Details</h1>
        <p>Username:</p>
        <p></p>
        <p>Email:</p>
        <p></p> */}

        <h2 style={wordStyle}> Sign Up </h2>

        <form>
          <label htmlFor="username">username</label>
          <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="your username" id="username" name="username"></input>
          <p></p>
          <label htmlFor="email">email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="yourEmail@gmail.com" id="email" name="email"></input>
          <p></p>
          <label htmlFor="confirmEmail">confirm email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="confirmEmail" placeholder="yourEmail@gmail.com" id="confirmEmail" name="confirmEmail"></input>
          <p></p>
          <label htmlFor="password">password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="**********" id="password" name="password"></input>
          <p></p>
          <Button variant="contained" onClick={() => addUser(username, email, password)}>Sign Up</Button>
        </form>
      </div>
    </Box>
    );
};

export default SignUp;