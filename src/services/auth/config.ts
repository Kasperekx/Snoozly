// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAd9rFvnnHGrzp7FGmROzotrNK1msBj4iA",
  authDomain: "snoozly-25d12.firebaseapp.com",
  projectId: "snoozly-25d12",
  storageBucket: "snoozly-25d12.appspot.com",
  messagingSenderId: "68082118735",
  appId: "1:68082118735:web:04355b3ab323acff537a3a",
  measurementId: "G-SNT155J9C7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
