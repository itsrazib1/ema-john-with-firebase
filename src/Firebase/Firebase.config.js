// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoBBeMpzPgHH-AYj341ya89X1v4Qk6Gmc",
  authDomain: "ema-john-with-firebase-fc669.firebaseapp.com",
  projectId: "ema-john-with-firebase-fc669",
  storageBucket: "ema-john-with-firebase-fc669.appspot.com",
  messagingSenderId: "576822329682",
  appId: "1:576822329682:web:7e203e9fc88f7f6e8cba8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app