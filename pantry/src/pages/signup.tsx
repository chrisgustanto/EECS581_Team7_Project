import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { SignUpInterface } from "./../interfaces";
import { addDoc, collection, getFirestore } from "@firebase/firestore"
import { firestore, firebaseApp, db } from "../firebase_setup/firebase"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { colors } from "@mui/material";
import {Routes, Route, useNavigate} from 'react-router-dom';
//import firebase from "@firebase/firestore";

//init services
// const db = getFirestore(firebaseApp)
const auth = getAuth()

const wordStyle = {
    fontFamily: "Rockwell",
    color: "rgb(210, 132, 33)",
    fontSize: "25px",
};

  const SignUp = () => {
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
              let newUser = { username: tempUsername, email: tempEmail, password: tempPassword };
              
              // const ref = collection(firestore, "UserData")

              createUserWithEmailAndPassword(auth, tempEmail, tempPassword)
                .then((userCredential) => {
                  
                  // try {
                  setDoc(doc(db, "UserData", userCredential.user.uid), newUser);
                  // } catch (err) {
                  //     console.log("error: ")
                  //     console.log(err)
                  // }
                  
                  // const ref = collection(db, "UserData", userCredential.user.uid)
                  // try {
                  //   addDoc(ref, newUser)
                  //   console.log("sent user data")
                  // } catch (err) {
                  //   console.log("error: ")
                  //   console.log(err)
                  // }
                  console.log("user created: ", userCredential.user)
                  navigateToAccount();
                  // window.location.href="http://localhost:3000/account";
                })
                .catch((err) => {
                  console.log(err.message)
                });
                
                // onAuthStateChanged(auth, (user) => {
                //   if(user){
                        // const userUID = user.uid;
                        // const username = user.displayName;
                        // const email = user.email;
                        // console.log(username);
                        // console.log(email);
                        // console.log("user added to userdata")
                        // await setDoc(doc(db, "UserData", ), newUser);
                        // const ref = collection(firestore, "UserData", user.uid)
                        // try {
                        //   addDoc(ref, newUser)
                        //   console.log("sent user data")
                        // } catch (err) {
                        //   console.log("error: ")
                        //   console.log(err)
                        // }

                //   } else {
                //         console.log("No user is signed in");
                //   }
                // })

              // const ref = collection(firestore, "UserData") // Firebase creates this automatically 
              
              // window.location.replace('http://localhost:3000/account');
              // window.location.href="http://localhost:3000/account";
              

              // try {
              //   addDoc(ref, newUser)
              //   console.log("sent user data")
              // } catch (err) {
              //   console.log(err)
              // }
              
              

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
        
        {/* {
          showAcc && 
          <p>
            <h2 style={wordStyle}>Account Details</h2>

            <form>
              <label htmlFor="username">username: {username}</label>
              <p></p>
              <label htmlFor="email">email: {email}</label>
              <p></p>
            </form>
            <Button variant="contained" onClick={() => logout()}>Log Out</Button>
          </p>
        } */}



      </div>
    </Box>
    );
};

export default SignUp;