// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD11bebNb7-Kvt-WBkE-kxsNqBePfICF-s",
  authDomain: "genius-car-services-b1190.firebaseapp.com",
  projectId: "genius-car-services-b1190",
  storageBucket: "genius-car-services-b1190.appspot.com",
  messagingSenderId: "694686501324",
  appId: "1:694686501324:web:ecccf621c1353161bab569",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
