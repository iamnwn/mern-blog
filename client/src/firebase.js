// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-d3506.firebaseapp.com",
  projectId: "mern-blog-d3506",
  storageBucket: "mern-blog-d3506.appspot.com",
  messagingSenderId: "997150253569",
  appId: "1:997150253569:web:dac5743f6b2d0b1eab5600",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
