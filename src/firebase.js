import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7Kt98_iKPZRcnfPKPfAJG9hF-YPWk22E",
  authDomain: "todo-app-f0e93.firebaseapp.com",
  projectId: "todo-app-f0e93",
  storageBucket: "todo-app-f0e93.appspot.com",
  messagingSenderId: "770531185511",
  appId: "1:770531185511", // Make sure to replace YOUR_APP_ID with your actual app ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();





