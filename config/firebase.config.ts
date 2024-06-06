// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPasXNG11NYoz-P2qYlhfcIrQZNmLxwdM",
  authDomain: "fr-wm-43428.firebaseapp.com",
  projectId: "fr-wm-43428",
  storageBucket: "fr-wm-43428.appspot.com",
  messagingSenderId: "307728581056",
  appId: "1:307728581056:web:15c00124f995644fb44825",
  measurementId: "G-8Z3ER2NJNL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
