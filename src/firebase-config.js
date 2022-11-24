// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth"
import { getStorage } from "@firebase/storage"
import { getFirestore } from "@firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAu6Ad_Oi65S_QWJY9W7NLjtP5b_ac-2UU",
  authDomain: "segamezonedb.firebaseapp.com",
  projectId: "segamezonedb",
  storageBucket: "segamezonedb.appspot.com",
  messagingSenderId: "227717550426",
  appId: "1:227717550426:web:ec82af4d3fa560d4f0e363"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);

