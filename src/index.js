import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as firebase from "firebase";
import "typeface-roboto";
require("firebase/auth");

const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyD1scAfo3m9WWZn7iGnVZ-yMFetpLt3wsQ",
    authDomain: "youth-anon-questions.firebaseapp.com",
    projectId: "youth-anon-questions",
    storageBucket: "youth-anon-questions.appspot.com",
    messagingSenderId: "917671523011",
    appId: "1:917671523011:web:e641fb8ac9b5c1fcede876",
    measurementId: "G-1S8C20RBSV"

});

// Initialize Firebase

export default firebaseConfig;

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
