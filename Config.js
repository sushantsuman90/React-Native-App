// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtyrKGmMI5uHDhp2XIW2sUDmng29wgmcw",
  authDomain: "native-firebase-429ea.firebaseapp.com",
  projectId: "native-firebase-429ea",
  storageBucket: "native-firebase-429ea.appspot.com",
  messagingSenderId: "1069586134217",
  appId: "1:1069586134217:web:98fc1f96231d6775730918"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);    