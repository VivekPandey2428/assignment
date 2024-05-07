// Import the individual Firebase services you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCcDrDKEsNqKwQXO6Np8ZC2flXuvsKHTng",
  authDomain: "fir-ac621.firebaseapp.com",
  projectId: "fir-ac621",
  storageBucket: "fir-ac621.appspot.com",
  messagingSenderId: "340349476389",
  appId: "1:340349476389:web:52dbb23028222f6ae8e9cc",
  measurementId: "G-BPHS5J3V2P",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      alert("User not found. Please sign up.");
    } else if (error.code === "auth/wrong-password") {
      alert("Invalid password. Please try again.");
    } else if (error.code === "auth/network-request-failed") {
      alert("Network error. Please check your internet connection.");
    } else {
      alert("An error occurred. Please try again later.");
    }
  }
};

const signupWithEmail = async ({ email, password }) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    alert(error.message);
  }
};

export { auth, signInWithGoogle, signupWithEmail };
