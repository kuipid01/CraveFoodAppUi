/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyCVWyOlAU6dnWnQBSTfjn73I4hSqpS2u70",

  authDomain: "newportfolio-7.firebaseapp.com",

  projectId: "newportfolio-7",

  storageBucket: "newportfolio-7.appspot.com",

  messagingSenderId: "636403668788",

  appId: "1:636403668788:web:3fd1b1469d5ae0574e7761"

};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const db = getFirestore(app);
export const storage = getStorage();