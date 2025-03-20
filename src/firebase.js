// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "blog-b4205.firebaseapp.com",
  projectId: "blog-b4205",
  storageBucket: "blog-b4205.firebasestorage.app",
  messagingSenderId: "916008485111",
  appId: "1:916008485111:web:5d89875ed120c2c18353f2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
