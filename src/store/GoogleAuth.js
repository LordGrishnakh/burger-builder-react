import React from "react";
import { connect } from "react-redux";
import GoogleButtonStyling from './GoogleAuthStyling.module.css';
import { signIn, signOut } from "./actions";
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2mHC4xtS_wvajtGDdhBeFtK0HiW93Ey4",
  authDomain: "burger-app-af019.firebaseapp.com",
  databaseURL: "https://burger-app-af019.firebaseio.com",
  projectId: "burger-app-af019",
  storageBucket: "burger-app-af019.appspot.com",
  messagingSenderId: "766815922817",
  appId: "1:766815922817:web:9a73bf48292aacf752bb80",
  measurementId: "G-42CQVYQRS4",
};

const GoogleOAth2_test = (props) => {
  const oathGoogle = () => {
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    const provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("email");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        props.signIn(user.uid, token);
        // ...
      })
      .catch(function (error) {
        // Handle Errors here.
        // var errorMessage = error.message;
        // var errorCode = error.code;
        // The email of the user's account used.
        // var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        // var credential = error.credential;
        // ...
      });
  };
  return (
    <button className={GoogleButtonStyling.SignIn} onClick={oathGoogle}>
      <img src="img/googleBtn.svg" alt="googleBtn" />
      <p>Sign in with Google</p>
    </button>
  );
};

export default connect(null, { signIn, signOut })(GoogleOAth2_test);
