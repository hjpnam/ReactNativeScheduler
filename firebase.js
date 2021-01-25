import firebase from 'firebase';
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCrKSleZtkV5ite6PJF-pWSahQqTB14kP0",
  authDomain: "cs394scheduler-d4f64.firebaseapp.com",
  databaseURL: "https://cs394scheduler-d4f64-default-rtdb.firebaseio.com",
  projectId: "cs394scheduler-d4f64",
  storageBucket: "cs394scheduler-d4f64.appspot.com",
  messagingSenderId: "389459912961",
  appId: "1:389459912961:web:2b0ea3b5cde5e6847ad300"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export { firebase };
