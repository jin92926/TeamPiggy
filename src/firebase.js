// Import the functions you need from the SDKs you need
//firebase 9버전에 맞게 import
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

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

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default app;
export const authService = firebase.auth();
export const firebaseInstance = firebase;
export const dbService = firebase.firestore;
export const storageService = firebase.storage;
