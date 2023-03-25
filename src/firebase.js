import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXIErTQMH3j0KwAtGzF6gXGT3s9VZc4Lo",
  authDomain: "dvan-92532.firebaseapp.com",
  projectId: "dvan-92532",
  storageBucket: "dvan-92532.appspot.com",
  messagingSenderId: "147151990431",
  appId: "1:147151990431:web:7252ba1d69e5708020fcaa",
  measurementId: "G-22GY66E6MF",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
