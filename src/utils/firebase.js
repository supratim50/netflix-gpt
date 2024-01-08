// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0QURkOOWwGjjNHFwNVPugoYBFkdrMfZY",
  authDomain: "netflixgpt-312d7.firebaseapp.com",
  projectId: "netflixgpt-312d7",
  storageBucket: "netflixgpt-312d7.appspot.com",
  messagingSenderId: "462043856257",
  appId: "1:462043856257:web:99c27062396e2035097c80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)