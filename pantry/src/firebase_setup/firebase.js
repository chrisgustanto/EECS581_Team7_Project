// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { collection, getFirestore, getDocs } from "@firebase/firestore";
import firebase from "./firebase";
import "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA9XcRfLbdkQTOfBMV3bnHzCudVF0mRQyE",
    authDomain: "pantry-81b53.firebaseapp.com",
    projectId: "pantry-81b53",
    storageBucket: "pantry-81b53.appspot.com",
    messagingSenderId: "4457013425",
    appId: "1:4457013425:web:d799aee00297a8505bc290",
    measurementId: "G-PD4MPGR0H5"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
export const firestore = getFirestore(firebaseApp);

//initialize services
export const database = getFirestore(firebaseApp)

//collection ref
const colRef = collection(database, 'UserData')

//get collection data
getDocs(colRef)
    .then((snapshot) => {
        let UserData = []
        snapshot.docs.forEach((doc) => {
            UserData.push({ ...doc.data(), id: doc.id })
        })
        // console.log(UserData)
    })
    .catch(err => {
        console.log(err.message)
    })

// export {firebaseApp}