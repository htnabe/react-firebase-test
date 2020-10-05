import * as firebase from "firebase";
import "firebase/auth";

import firebaseConfig from "./firebaseConfig";

// Initialize Firebase App

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const user = auth.currentUser;

export const loginWithEmail = (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

export const userEmail = () => user.email;
export const verifyWithEmail = () => user.sendEmailVerification();

export const VerifyUser = (email, actionCodeSettings) =>
  auth
    .sendSignInLinkToEmail(email, actionCodeSettings)
    .then(function () {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem("emailForSignIn", email);
    })
    .catch(function (error) {
      // Some error occurred, you can inspect the code: error.code
    });

export const verifyEmailverified = () => user.emailVerified();

export const registerWithEmail = (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);

export const logout = () => auth.signOut();

export const passwordReset = (email) => auth.sendPasswordResetEmail(email);
