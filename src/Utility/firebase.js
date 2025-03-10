import firebase from "firebase/compat/app";

// auth
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth"



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-FC_61ufFVk31JwZXdRHApG7sgtkwauM",
  authDomain: "clone-9c098.firebaseapp.com",
  projectId: "clone-9c098",
  storageBucket: "clone-9c098.firebasestorage.app",
  messagingSenderId: "545296955037",
  appId: "1:545296955037:web:1151244793d404a1ee8674"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const db = app.firestore()