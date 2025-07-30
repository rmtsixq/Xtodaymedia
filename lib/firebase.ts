// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, Auth } from "firebase/auth";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage, FirebaseStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBujRcE0V1PtE65fFaZ6FO4O_PRdIz7_N0",
  authDomain: "bensende-e7507.firebaseapp.com",
  databaseURL: "https://bensende-e7507-default-rtdb.firebaseio.com",
  projectId: "bensende-e7507",
  storageBucket: "bensende-e7507.firebasestorage.app",
  messagingSenderId: "935368276799",
  appId: "1:935368276799:web:dbd0280301acdd2ddcb18a",
  measurementId: "G-5FE73R5JZC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
let analytics: any;
let auth: Auth;
let db: Firestore;
let storage: FirebaseStorage;

// Only initialize analytics in the browser
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

// Initialize Auth
auth = getAuth(app);

// Initialize Firestore
db = getFirestore(app);

// Initialize Storage
storage = getStorage(app);

export { app, analytics, auth, db, storage };