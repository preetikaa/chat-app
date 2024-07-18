import { initializeApp } from "firebase/app";
import { browserLocalPersistence, getAuth, setPersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: "chatapp-10bd1.firebaseapp.com",
    projectId: "chatapp-10bd1",
    storageBucket: "chatapp-10bd1.appspot.com",
    messagingSenderId: "111679102186",
    appId: "1:111679102186:web:478c6acb2d29fd5b5c4b93",

  };
  
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});