// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "david-blog-de009.firebaseapp.com",
  projectId: "david-blog-de009",
  storageBucket: "david-blog-de009.appspot.com",
  messagingSenderId: "46819573189",
  appId: "1:46819573189:web:41e996ddd5262aec689fac"
};
// Your web app's Firebase configuration
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
