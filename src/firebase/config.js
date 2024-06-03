// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo2b_8U1GMw6j3rq3WWYDQTUDkaryvZak",
  authDomain: "mi-app-f0cfd.firebaseapp.com",
  projectId: "mi-app-f0cfd",
  storageBucket: "mi-app-f0cfd.appspot.com",
  messagingSenderId: "516693117794",
  appId: "1:516693117794:web:ff46abc7a5ffad6d653a3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);