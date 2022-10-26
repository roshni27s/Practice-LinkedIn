import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAAfXKIUMF7DrPIlyzlNW2Q79vF_fOQVgc",
    authDomain: "linkedin-clone-7a95f.firebaseapp.com",
    projectId: "linkedin-clone-7a95f",
    storageBucket: "linkedin-clone-7a95f.appspot.com",
    messagingSenderId: "269184465685",
    appId: "1:269184465685:web:3643ddd0f0a059aee0871c"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;