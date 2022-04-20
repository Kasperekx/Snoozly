// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAd9rFvnnHGrzp7FGmROzotrNK1msBj4iA",
  authDomain: "snoozly-25d12.firebaseapp.com",
  projectId: "snoozly-25d12",
  storageBucket: "snoozly-25d12.appspot.com",
  messagingSenderId: "68082118735",
  appId: "1:68082118735:web:04355b3ab323acff537a3a",
  measurementId: "G-SNT155J9C7",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// type FirebaseUserState = User | null;

export { auth };
