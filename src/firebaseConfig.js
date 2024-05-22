import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAiMyyK9kNMmheS3BHlpigQxCviUy3-O5w",
  authDomain: "ecommerce-reactjs-1.firebaseapp.com",
  projectId: "ecommerce-reactjs-1",
  storageBucket: "ecommerce-reactjs-1.appspot.com",
  messagingSenderId: "621280090351",
  appId: "1:621280090351:web:f8b66d5c0350f981e1231a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
