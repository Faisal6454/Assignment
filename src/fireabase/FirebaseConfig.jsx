// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwQqscKgZ9VO007oSg66LCYK6-MyesHeY",
  authDomain: "ecommerceapp-2f6db.firebaseapp.com",
  databaseURL: "https://ecommerceapp-2f6db-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecommerceapp-2f6db",
  storageBucket: "ecommerceapp-2f6db.appspot.com",
  messagingSenderId: "726936809763",
  appId: "1:726936809763:web:e5b2e9199d8359dc661c96",
  measurementId: "G-TM55H1PENQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}