// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);