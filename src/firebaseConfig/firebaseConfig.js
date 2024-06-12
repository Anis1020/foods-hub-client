// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPcagT5ykEgvCJ-GHS8CP6ob0PphQq2kg",
  authDomain: "food-hubs-d5faf.firebaseapp.com",
  projectId: "food-hubs-d5faf",
  storageBucket: "food-hubs-d5faf.appspot.com",
  messagingSenderId: "749979924465",
  appId: "1:749979924465:web:8ff647e975c775c23d3650",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
