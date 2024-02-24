// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRnNKN5j8bytMqjQnaARYf43AB2Tr0i4I",
  authDomain: "hideaway-leathers.firebaseapp.com",
  projectId: "hideaway-leathers",
  storageBucket: "hideaway-leathers.appspot.com",
  messagingSenderId: "938453869939",
  appId: "1:938453869939:web:f8318c185e838ffd8dd106",
  measurementId: "G-DVXS4F13SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);