// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9J8OrN_OMClSoS2tEywBfKdVBw0Eoguw",
  authDomain: "netflixgpt-f54f3.firebaseapp.com",
  projectId: "netflixgpt-f54f3",
  storageBucket: "netflixgpt-f54f3.appspot.com",
  messagingSenderId: "428589403951",
  appId: "1:428589403951:web:e78a4f294b9f8d05805bda",
  measurementId: "G-B56K17GX13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();