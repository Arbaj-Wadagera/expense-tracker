// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJiP7UYZlejOb1jos3jXxZr5KAK4hCRMk",
  authDomain: "expense-tracker-67afc.firebaseapp.com",
  projectId: "expense-tracker-67afc",
  storageBucket: "expense-tracker-67afc.appspot.com", // ✅ FIXED
  messagingSenderId: "435822159789",
  appId: "1:435822159789:web:4bc802477d5be72c1e2324",
  measurementId: "G-7C60SRXZF5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
