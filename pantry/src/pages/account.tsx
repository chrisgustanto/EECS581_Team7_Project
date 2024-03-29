import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { SignUpInterface } from "./../interfaces";
import { addDoc, collection, getFirestore } from "@firebase/firestore"
import { firestore, firebaseApp, database } from "../firebase_setup/firebase"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { colors } from "@mui/material";
import { fireEvent } from "@testing-library/react";
import { FirebaseError } from "firebase/app";


//init services
//const database = getFirestore()
const auth = getAuth()

const wordStyle = {
    fontFamily: "Rockwell",
    color: "rgb(210, 132, 33)",
    fontSize: "25px",
};

const Account = () => {
      
      // const [myUser,setCurrentUser] = useState(auth.currentUser || null)
      const [currentUsername,setCurrentUsername] = useState()
      const [currentEmail,setCurrentEmail] = useState()
      

      onAuthStateChanged(auth, (user) => {
            if(user){
                  const userUID = user.uid;
                  const myusername = user.displayName;
                  const email = user.email;
                  console.log(myusername);
                  console.log(email);

                  const docRef = doc(database, "UserData", user.uid)

                  getDoc(docRef)
                        .then((doc) => {
                              console.log("user data: ")
                              console.log(doc.data(), doc.id)
                              if(doc.exists()){
                                    console.log("this username: ")
                                    console.log(doc.data().username)
                                    setCurrentUsername(doc.data().username)
                                    setCurrentEmail(doc.data().email)
                              } else {
                                    console.log("empty doc")
                              }
                        })


            } else {
                  console.log("No user is signed in");
            }
      })
      

      function logout(){
            signOut(auth)
                  .then(() => {
                        console.log("user logged out")
                  })
                  .catch((err) => {
                        console.log(err.message)
                  })
                  
            console.log("logged out");
            window.location.replace('http://localhost:3000/login');
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
            <h2 style={wordStyle}>Account Details</h2>

            <form>
            <label htmlFor="username">username: {currentUsername}</label>
            <p></p>
            <label htmlFor="email">email: {currentEmail}</label>
            <p></p>
            </form>
            <Button variant="contained" onClick={() => logout()}>Log Out</Button>
            </div>
            </Box>
      );

};
     

export default Account;

