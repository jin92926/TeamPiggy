// Import the functions you need from the SDKs you need
//firebase 9버전에 맞게 import
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.EACT_APP_MESSAGE_ID,
  appId: process.env.REACT_APP_ID,
};
// console.log(firebaseConfig)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
export const authService = getAuth();
export const dbService = getFirestore();
export const storageService = getStorage();
