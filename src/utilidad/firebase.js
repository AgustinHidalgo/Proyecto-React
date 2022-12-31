// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjtt6dDYEy9syR9YdZ8kC05H8AkTl6sXI",
  authDomain: "electroshop-react.firebaseapp.com",
  projectId: "electroshop-react",
  storageBucket: "electroshop-react.appspot.com",
  messagingSenderId: "945510643187",
  appId: "1:945510643187:web:0b12203d63a35cbbb64e86"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);