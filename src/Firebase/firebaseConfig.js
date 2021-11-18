import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChFAIrVTr_FXOlIwNnQJwsdQ9zZxJHvQQ",
  authDomain: "real-time-bd-6f485.firebaseapp.com",
  projectId: "real-time-bd-6f485",
  storageBucket: "real-time-bd-6f485.appspot.com",
  messagingSenderId: "533320155885",
  appId: "1:533320155885:web:2884c8548bd182f0a582e4",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore();
