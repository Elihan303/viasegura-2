// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBCNDRsLwkFXGq0RSD5J5XM3SeS63jSA3I",
//   authDomain: "viasegura-4aaba.firebaseapp.com",
//   projectId: "viasegura-4aaba",
//   storageBucket: "viasegura-4aaba.appspot.com",
//   messagingSenderId: "839854555961",
//   appId: "1:839854555961:web:24c22dd270df223f005ee8",
// };
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_API_KEY,
  appId: import.meta.env.VITE_MESSAGINGSENDERID,
};

// Initialize Firebase
export const FireBaseApp = initializeApp(firebaseConfig);
