import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBM0UEJkH9cT2XTaIyazlsm90a9_iOsyE8",
  authDomain: "pecker-8b0ae.firebaseapp.com",
  projectId: "pecker-8b0ae",
  storageBucket: "pecker-8b0ae.appspot.com",
  messagingSenderId: "350251717169",
  appId: "1:350251717169:web:1cf810a9cf1448679a3b10",
  measurementId: "G-HMNDXD3KF3",
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();
