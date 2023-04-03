import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAeNoFrQcstaOEj18aFIajH9W-VwdO0KgM",
  authDomain: "proyectofinal-coderhouse-30ada.firebaseapp.com",
  projectId: "proyectofinal-coderhouse-30ada",
  storageBucket: "proyectofinal-coderhouse-30ada.appspot.com",
  messagingSenderId: "630641458225",
  appId: "1:630641458225:web:4d47c60478f6ab5215e910",
  measurementId: "G-RFVVCD7D6C",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
