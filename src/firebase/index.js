// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKu1dM-vdcJe0gEpCwrldLbHuffPOc9J4",
  authDomain: "my-personal-web-ac66b.firebaseapp.com",
  projectId: "my-personal-web-ac66b",
  storageBucket: "my-personal-web-ac66b.appspot.com",
  messagingSenderId: "521922731137",
  appId: "1:521922731137:web:14aabc68ab64fac15ac180",
  measurementId: "G-WNW8J31W61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);