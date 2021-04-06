// <!-- The core Firebase JS SDK is always required and must be listed first -->
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

import Student from "../models/student";

// Initialize Firebase
var firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);

/* FIRESTORE */
export const getStudents = async () => {
  try {
    // Get a reference to the students table/collection
    const studentsRef = await firestore.collection("students");
    // Get the snapshot of the reference with .get()
    const studentsSnapshot = await studentsRef.get();
    // Each doc relates to a document in the students table in firestore
    // call .data() to get fields (id, name, etc...)
    const students = studentsSnapshot.docs.map((doc) => new Student(doc.data()));

    return students;
  } catch (err) {
    return err.message;
  }
};

/* OPTIONAL: Export firebase tools */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
