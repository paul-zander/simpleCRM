import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "simplecrm-cb684.firebaseapp.com",
  projectId: "simplecrm-cb684",
  storageBucket: "simplecrm-cb684.appspot.com",
  messagingSenderId: "31610609049",
  appId: "1:31610609049:web:7919d96a2b79ebd02fc708",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
