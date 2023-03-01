import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { SignUpInterface } from "./../interfaces";
import { addDoc, collection } from "@firebase/firestore"
import { firestore } from "../firebase_setup/firebase"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
const wordStyle = {
    fontFamily: "Rockwell",
    color: "rgb(210, 132, 33)",
    fontSize: "25px",
  };

  const SignUp = () => {
  const auth = getAuth();
  const [username, setUsername] =  useState("");
  const [emailConfirmation, setEmailConfirmation] =  useState("");
  const [email, setEmail] =  useState("");
  const [password, setPassword] =  useState("");

  const [myArray, setMyArray] = useState<SignUpInterface[]>([]);

  //https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
  //returns true if input is a valid email
  const validateEmail = (email: string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  

  //para: username, email, emailConfermation, pasword
  //sends user data to firebase
  //returns: none             
  function addUser( 
        tempUsername: string,
        tempEmail: string,
        tempEmailConfirmation: string,
        tempPassword: string
  ){
        if(tempUsername == "" || tempEmail == "" || tempEmailConfirmation == "" || tempPassword == ""){
          alert("Empty Field")
        } else {
          if(tempEmail == tempEmailConfirmation){
            if(validateEmail(tempEmail)){
              let newUser = { username: tempUsername, email: tempEmail, password: tempPassword };
            
            const ref = collection(firestore, "UserData") // Firebase creates this automaticall 
            try {
              addDoc(ref, newUser)
              console.log("sent user data")
            } catch (err) {
              console.log(err)
            }
            /*
            createUserWithEmailAndPassword(auth, tempEmail, tempPassword).then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log("test success")
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              // ..
            });
            */
            //myArray.push(newUser);
            } else {
              alert("not valide email")
            }
          } else {
            console.log("email does not match confirmation email")
            alert("email does not match confirmation email")
          }
            
        }
        
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
          <input value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} type="confirmEmail" placeholder="yourEmail@gmail.com" id="confirmEmail" name="confirmEmail"></input>
          <p></p>
          <label htmlFor="password">password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="**********" id="password" name="password"></input>
          <p></p>
          <Button variant="contained" onClick={() => addUser(username, email, emailConfirmation, password)}>Sign Up</Button>
        </form>
      </div>
    </Box>
    );
};

export default SignUp;