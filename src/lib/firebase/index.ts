// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYh8egbxgpD4jhESz7FIMaasvRK9H0AbY",
  authDomain: "nextjstest-6ccd8.firebaseapp.com",
  projectId: "nextjstest-6ccd8",
  storageBucket: "nextjstest-6ccd8.appspot.com",
  messagingSenderId: "623845515530",
  appId: "1:623845515530:web:f1b1ed2aef07938d395af3",
  measurementId: "G-TRG6BYCMQD",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
