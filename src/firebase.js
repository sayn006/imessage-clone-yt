import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "******************************",
    authDomain: "imessage-clone-yt-ee002.firebaseapp.com",
    databaseURL: "https://imessage-clone-yt-ee002.firebaseio.com",
    projectId: "imessage-clone-yt-ee002",
    storageBucket: "imessage-clone-yt-ee002.appspot.com",
    messagingSenderId: "**********************",
    appId: "1:554340052182:web:547e2bcecea0a4a092ed77",
    measurementId: "G-TF88X0V720"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
