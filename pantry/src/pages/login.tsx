import { useEffect, useState } from "react";
import { Box, Button } from "@mui/material";
import { addDoc, collection, getFirestore } from "@firebase/firestore";
import { firestore } from "../firebase_setup/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { Routes, Route, useNavigate } from "react-router-dom";

//init services
// const database = getFirestore()

const wordStyle = {
  fontFamily: "Rockwell",
  color: "rgb(210, 132, 33)",
  fontSize: "25px",
};

//para: email pasword
//returns: none
const Login = () => {
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function submit(email: string, password: string) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user logged in: ", userCredential);
        navigateToAccount();
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  function navigateToAccount() {
    navigate("/account");
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
      <div>
        <h2 style={wordStyle}> Login </h2>
        <form>
          {/* user email input textbox */}
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="yourEmail@gmail.com"
            id="email"
            name="email"
          ></input>
          <p></p>

          {/* user password input textbox */}
          <label htmlFor="password">password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="*******"
            id="password"
            name="password"
          ></input>
          <p></p>

          <a style={{ fontSize: 14 }} href="http://localhost:3000/signup">
            Go to Sign Up
          </a>
          <p></p>

          {/* form submission button */}
          <Button variant="contained" onClick={() => submit(email, password)}>
            Login
          </Button>
        </form>
      </div>
    </Box>
  );
};

export default Login;
