// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6I93BiKTCuFsR9LPR6r1vVE7obEb8PU0",
  authDomain: "todoappfirebase-dfc14.firebaseapp.com",
  projectId: "todoappfirebase-dfc14",
  storageBucket: "todoappfirebase-dfc14.appspot.com",
  messagingSenderId: "934028623688",
  appId: "1:934028623688:web:4b27bedc241966a34a7d7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const database = getFirestore(app);

export default database