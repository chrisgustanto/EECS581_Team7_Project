import React, { FunctionComponent } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { SignUpInterface } from "./../interfaces";
import { addDoc, collection, getFirestore } from "@firebase/firestore"
// import { firestore, firebaseApp, database } from "../firebase_setup/firebase"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { colors } from "@mui/material";
import {Routes, Route, useNavigate} from 'react-router-dom';
import { IngredientInterface, GroceryListInterface } from "./../interfaces";
//import firebase from "@firebase/firestore";

import { firebaseApp } from "../firebase_setup/firebase";
import { database } from "../firebase_setup/firebase";


interface Props {
  ingredientList: IngredientInterface[];
  groceryList: GroceryListInterface[];
}

//init services
// const database = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

const wordStyle = {
    fontFamily: "Rockwell",
    color: "rgb(210, 132, 33)",
    fontSize: "25px",
};

  const SignUp: FunctionComponent<Props> = ({ ingredientList, groceryList }) => {
  const [username, setUsername] =  useState("");
  const [emailConfirmation, setEmailConfirmation] =  useState("");
  const [email, setEmail] =  useState("");
  const [password, setPassword] =  useState("");

  const [myArray, setMyArray] = useState<SignUpInterface[]>([]);

  const navigate = useNavigate();



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
        } else if (tempPassword.length < 6) {
          alert("password must be at least 6 characters long")
        } else {
          if(tempEmail == tempEmailConfirmation){
            if(validateEmail(tempEmail)){
              let newUser = { username: tempUsername, email: tempEmail, password: tempPassword, ingredientList: ingredientList, groceryList: groceryList};
              
              // const ref = collection(firestore, "UserData")

              createUserWithEmailAndPassword(auth, tempEmail, tempPassword)
                .then((userCredential) => {
                  
                  // try {
                  setDoc(doc(database, "UserData", userCredential.user.uid), newUser);

                  console.log("user created: ", userCredential.user)
                  navigateToAccount();

                })
                .catch((err) => {
                  console.log(err.message)
                });
                
            } else {
              alert("not valide email")
            }
          } else {
            console.log("email does not match confirmation email")
            alert("email does not match confirmation email")
          }
            
        }
        
  }

  function navigateToAccount(){
    navigate('/account')
  }

  function logout(){
    signOut(auth)
      .then(() => {
        console.log("the user signed out")
      })
      .catch((err) => {
        console.log(err.message)
      })

    window.location.replace('http://localhost:3000/signup');
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
          // showSignUp && 
          <p>
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
              <input value={emailConfirmation} onChange={(e) => setEmailConfirmation(e.target.value)} type="confirmEmail" placeholder="yourEmail@gmail.com" id="confirmEmail" name="confirmEmail"></input>
              <p></p>
              
              {/* password input textbox */}
              <label htmlFor="password">password</label>
              <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="**********" id="password" name="password"></input>
              <p></p>

              <a style={{ fontSize: 14 }} href="http://localhost:3000/login">Go to Log in</a>
              <p></p>
              
              {/* form submission button */}
              <Button variant="contained" onClick={() => addUser(username, email, emailConfirmation, password)}>Sign Up</Button>
            </form>
          </p>
            
        }
        

      </div>
    </Box>
    );
};

export default SignUp;