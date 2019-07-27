import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBRftr4EbxAlthu_nUkQb9PcMLubOJhkk0",
    authDomain: "dreamcloud-ce36b.firebaseapp.com",
    databaseURL: "https://dreamcloud-ce36b.firebaseio.com",
    projectId: "dreamcloud-ce36b",
    storageBucket: "dreamcloud-ce36b.appspot.com",
    messagingSenderId: "339117687013",
    appId: "1:339117687013:web:92c5eb465ebfe975"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);



ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
