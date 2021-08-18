import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA_afbby1hY-vV6eEctTcGmlWzYAzuNKJs",
  authDomain: "disney-clone-44171.firebaseapp.com",
  projectId: "disney-clone-44171",
  storageBucket: "disney-clone-44171.appspot.com",
  messagingSenderId: "909269335663",
  appId: "1:909269335663:web:b31b042f8edc03b840979a",
};
const app = !firebase.app.lenght
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
