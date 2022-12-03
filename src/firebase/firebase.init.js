// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBu3wAh9aaBfu4JGr-ldshCtEXSiAIygIY",
  authDomain: "timple-firebase-auth-d37b9.firebaseapp.com",
  projectId: "timple-firebase-auth-d37b9",
  storageBucket: "timple-firebase-auth-d37b9.appspot.com",
  messagingSenderId: "886526410966",
  appId: "1:886526410966:web:564bbca708a3cc6e118977"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default(app)