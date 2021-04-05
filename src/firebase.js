import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBT8e5PH1w1Xf9Hpy_jPB5ZmbfNpHwBZZw",
  authDomain: "slack-clone-524b7.firebaseapp.com",
  projectId: "slack-clone-524b7",
  storageBucket: "slack-clone-524b7.appspot.com",
  messagingSenderId: "852275975451",
  appId: "1:852275975451:web:b5f69e254b6853c8bdefbe",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
