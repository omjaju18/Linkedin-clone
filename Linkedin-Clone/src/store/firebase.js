import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC6jigq2ScUKj-T0t0XpDdXn3WCb8LDyHg",
  authDomain: "linkedin-clone18.firebaseapp.com",
  projectId: "linkedin-clone18",
  storageBucket: "linkedin-clone18.appspot.com",
  messagingSenderId: "796912983992",
  appId: "1:796912983992:web:8bb391e80f0c078844b94d",
  measurementId: "G-MRM9VBLK37"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
