// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-80caf.firebaseapp.com",
  projectId: "mern-estate-80caf",
  storageBucket: "mern-estate-80caf.appspot.com",
  messagingSenderId: "585783181705",
  appId: "1:585783181705:web:551ba779b9b32c3aa1e158"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);