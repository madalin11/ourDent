// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

//import {storage}from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCnVzMnKJReRV2xzK51wrMUvaauBf67ypo",
    authDomain: "ourdent-5e111.firebaseapp.com",
    projectId: "ourdent-5e111",
    storageBucket: "ourdent-5e111.appspot.com",
    messagingSenderId: "630996289938",
    appId: "1:630996289938:web:58fbcb8b3aeea06576594b"
  };
// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);

} else {
  app = firebase.app()
}
const db = app.firestore();
const auth = firebase.auth();

export { auth, db };