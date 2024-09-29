import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "teacup-302f3.firebaseapp.com",
  projectId: "teacup-302f3",
  storageBucket: "teacup-302f3.appspot.com",
  messagingSenderId: "653152440518",
  appId: "1:653152440518:web:140a743c5e34e41cce07c7"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()