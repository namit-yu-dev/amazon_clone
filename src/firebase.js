// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBV005AijBeVqVOFYMhfo_KcOdj7YlJ6E4",
  authDomain: "e-challenge-1e477.firebaseapp.com",
  projectId: "e-challenge-1e477",
  storageBucket: "e-challenge-1e477.appspot.com",
  messagingSenderId: "235497913482",
  appId: "1:235497913482:web:d475103f08a3dda9400173",
  measurementId: "G-5TXWWHSLYY",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
