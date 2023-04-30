// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDXyKIA6AFaQdjXGGHyNTT9oehjZOs5Sk",
  authDomain: "the-news-dragon-client-af922.firebaseapp.com",
  projectId: "the-news-dragon-client-af922",
  storageBucket: "the-news-dragon-client-af922.appspot.com",
  messagingSenderId: "597975432772",
  appId: "1:597975432772:web:fee200f48bf1086b008611"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;