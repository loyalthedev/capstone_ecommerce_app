// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, 
         signInWithRedirect, 
         signInWithPopup, 
         GoogleAuthProvider 
        } from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCF-nrfgM8Y_4icOJ3R7XNFH9LkZ36k7AU",
  authDomain: "crown-clothing-db01.firebaseapp.com",
  projectId: "crown-clothing-db01",
  storageBucket: "crown-clothing-db01.appspot.com",
  messagingSenderId: "1035569075845",
  appId: "1:1035569075845:web:384a78620e407b88407bec"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// DataBase Initialization
export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);

  console.log(userSnapShot);
  console.log(userSnapShot.exists());

  if(userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      });
    } catch (error) {
      console.log("Error creating the user", error.message);
    }
  }
  
  return userDocRef;

  // If user data doest not exist
  // Create / set the document with the data from the userAuth in my collection
  // Return userDocRef

}