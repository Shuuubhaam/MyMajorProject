import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAxvoyEnmpGuQxRLFfA3aVqf6LFR7ErOik",
  authDomain: "socialmediafirebase-8f22f.firebaseapp.com",
  databaseURL: "https://socialmediafirebase-8f22f-default-rtdb.firebaseio.com",
  projectId: "socialmediafirebase-8f22f",
  storageBucket: "socialmediafirebase-8f22f.appspot.com",
  messagingSenderId: "405732782772",
  appId: "1:405732782772:web:dc63c37df860d3053a5de1"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
