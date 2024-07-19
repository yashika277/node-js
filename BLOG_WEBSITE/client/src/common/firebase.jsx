import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4-GXMMwB8SOsgB5492A-56cKKQLwSgSw",
  authDomain: "react-js-blog-website-fa4f1.firebaseapp.com",
  projectId: "react-js-blog-website-fa4f1",
  storageBucket: "react-js-blog-website-fa4f1.appspot.com",
  messagingSenderId: "967779542330",
  appId: "1:967779542330:web:62865ec11a66c8b8395c03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Google Auth
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {
  let user = null;

  await signInWithPopup(auth, provider)
    .then((result) => {
      user = result.user;
    })
    .catch((err) => console.log(err));

  return user;
};
