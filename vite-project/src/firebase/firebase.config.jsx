// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOoc16i1ApV0zRrHqLHwatEtfgu3sN_9c",
  authDomain: "sunlight-dental-care.firebaseapp.com",
  projectId: "sunlight-dental-care",
  storageBucket: "sunlight-dental-care.appspot.com",
  messagingSenderId: "522146315887",
  appId: "1:522146315887:web:0f16480bf0c5596d57179a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app