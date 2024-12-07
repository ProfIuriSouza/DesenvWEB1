// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAemuwKvka-Ms_GelGurNjWE-xuDzKVl8",
  authDomain: "web1-4ad19.firebaseapp.com",
  databaseURL: "https://web1-4ad19-default-rtdb.firebaseio.com",
  projectId: "web1-4ad19",
  storageBucket: "web1-4ad19.firebasestorage.app",
  messagingSenderId: "226845828083",
  appId: "1:226845828083:web:760620ccddfd36a5ac2886",
  measurementId: "G-4RWTCSC5FD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
