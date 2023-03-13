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

  const [showSignUp, setShowSignUp] = useState(true)
  const [showAcc, setShowAcc] = useState(false)
                
  function addUser( 
        tempUsername: string,
        tempEmail: string,
        tempPassword: string
  ){
        let newUser = { username: tempUsername, email: tempEmail, password: tempPassword };
        myArray.push(newUser);
        setShowSignUp(!showSignUp);
        setShowAcc(!showAcc);
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
        {
          showSignUp && <p>
            <h2 style={wordStyle}> Sign Up </h2>

            <form>

              {/* username input textbox */}
              <label htmlFor="username">username</label>
              <input value={username} onChange={(e) => setUsername(e.target.value)} type="username" placeholder="your username" id="username" name="username"></input>
              <p></p>

              {/* email input textbox */}
              <label htmlFor="email">email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="yourEmail@gmail.com" id="email" name="email"></input>
              <p></p>

              {/* confirm email input textbox */}
              <label htmlFor="confirmEmail">confirm email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="confirmEmail" placeholder="yourEmail@gmail.com" id="confirmEmail" name="confirmEmail"></input>
              <p></p>

              {/* password input textbox */}
              <label htmlFor="password">password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="**********" id="password" name="password"></input>
              <p></p>

              {/* form submission button */}
              <Button variant="contained" onClick={() => addUser(username, email, password)}>Sign Up</Button>

            </form>
          </p>

        }

        {
          showAcc && <p>
            <h2 style={wordStyle}>Account Details</h2>
            <p>Username:</p>
            <p></p>
            <p>Email:</p>
            <p></p>
          </p>
        }

        


        
      </div>
    </Box>
    );
};

export default SignUp;