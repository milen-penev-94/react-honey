import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getFirestore} from 'firebase/firestore';

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