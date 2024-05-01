// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEHG4a3NxWloqz3WDZFHyEh9hmSIjaDy0",
  authDomain: "watermelonians-c2d56.firebaseapp.com",
  projectId: "watermelonians-c2d56",
  storageBucket: "watermelonians-c2d56.appspot.com",
  messagingSenderId: "422041406150",
  appId: "1:422041406150:web:869daffdb554157387e5c7",
  measurementId: "G-HM7Q8MWTY2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
