import {getFirestore} from 'firebase/firestore'
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyA1yzgnOPctcr8qvExy2GatVoKo8uhD2KU",
  authDomain: "instagram-clone-f6cad.firebaseapp.com",
  projectId: "instagram-clone-f6cad",
  storageBucket: "instagram-clone-f6cad.appspot.com",
  messagingSenderId: "129347661166",
  appId: "1:129347661166:web:655b34fe6d4e542548657f",
  measurementId: "G-9VBBNKGJ1F"
};

export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore(app);
export const auth = getAuth(app);
export const storage=getStorage(app);