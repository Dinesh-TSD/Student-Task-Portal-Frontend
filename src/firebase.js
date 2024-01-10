import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyBy1DATyf-qPNRU-BktWviNRUHZ2i6ljok",
  authDomain: "portal-task.firebaseapp.com",
  projectId: "portal-task",
  storageBucket: "portal-task.appspot.com",
  messagingSenderId: "1089330475015",
  appId: "1:1089330475015:web:5c80bf59907ddd1af23aa2",
  measurementId: "G-REH6Z4CXVP"
});

const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    return { user };
  } catch (error) {
    console.log(error);
    return { error };
  }
};