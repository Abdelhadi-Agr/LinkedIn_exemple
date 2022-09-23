import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAAcmrLuFaOBjLBRuR_z6HGR3tBWwaZy4w",
  authDomain: "linkedin-81dc5.firebaseapp.com",
  projectId: "linkedin-81dc5",
  storageBucket: "linkedin-81dc5.appspot.com",
  messagingSenderId: "997582193314",
  appId: "1:997582193314:web:e5cceb870c6e519a320dfb"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };