import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';

// const app = firebase.initializeApp({
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   //databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// })

const app = firebase.initializeApp({
  apiKey: "AIzaSyAP85lo0FMwNDml-tD0f9yKZbv-0Jao5MY",
  authDomain: "react-honey-122b5.firebaseapp.com",
  projectId: "react-honey-122b5",
  storageBucket: "react-honey-122b5.appspot.com",
  messagingSenderId: "208318312636",
  appId: "1:208318312636:web:fcc47c59e09e282d7220b9",
  measurementId: "G-XG7VFNRJB9"
})

const auth = app.auth()
const db = getFirestore()
export { db, auth };