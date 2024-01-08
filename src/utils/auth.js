
// TODO: Need to change to appWrite
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {auth} from "./firebase";

//* SIGN UP and SIGN IN 
export const createAccount = (email, password) => {
    // TODO: Need to change to appWrite
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(`${errorCode} - ${errorMessage}`);
    });
}

export const signIn = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode} - ${errorMessage}`);
      });
}

// signout 
export const userSignOut = async () => {
  try{
    await signOut(auth);
    return true
  } catch(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(`${errorCode} - ${errorMessage}`);
    return false
  }

}