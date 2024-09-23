// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBfxQAwEzkzbgXd4kugMsrhNNLW2sfitfA",
  authDomain: "react-curso-fa96d.firebaseapp.com",
  projectId: "react-curso-fa96d",
  storageBucket: "react-curso-fa96d.appspot.com",
  messagingSenderId: "580323453468",
  appId: "1:580323453468:web:c9b37255deeb7dd2f30dd9"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp )
export const FirebaseDB = getFirestore( FirebaseApp )