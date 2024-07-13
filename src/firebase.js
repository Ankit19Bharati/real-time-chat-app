import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrWu4k9BwLQMh4y3nkzHY2w0ZqwOatU6g",
  authDomain: "real-time-chat-app-783a5.firebaseapp.com",
  projectId: "real-time-chat-app-783a5",
  storageBucket: "real-time-chat-app-783a5.appspot.com",
  messagingSenderId: "937124210466",
  appId: "1:937124210466:web:c4ac7ad52132d25430277b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
