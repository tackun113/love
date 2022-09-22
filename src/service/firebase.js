import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTiZfIi_ACw8s6xteLR_v3SCpWIiR1gwI",
  authDomain: "love-4a358.firebaseapp.com",
  projectId: "love-4a358",
  storageBucket: "love-4a358.appspot.com",
  messagingSenderId: "105677247155",
  appId: "1:105677247155:web:c9bd8da75378c29afe56c6",
};

// Initialize Firebase with a "default" Firebase project
const defaultProject = initializeApp(firebaseConfig);

export const db = getDatabase();
