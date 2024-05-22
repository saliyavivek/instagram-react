// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/storage";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAGC-gE3H0N11F_AgSnOmgAl2s80wfSNdI",
  authDomain: "instagram-clone-883ca.firebaseapp.com",
  databaseURL: "https://instagram-clone-883ca-default-rtdb.firebaseio.com",
  projectId: "instagram-clone-883ca",
  storageBucket: "instagram-clone-883ca.appspot.com",
  messagingSenderId: "958238625316",
  appId: "1:958238625316:web:c33c6b723c7038e79152b1",
  measurementId: "G-CKM7PZT64L",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
