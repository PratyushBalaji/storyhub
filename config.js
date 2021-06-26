import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyDq4a37vf67OhPvLj7R3N99NVBuwMLThNM",
  authDomain: "storyhub-f1225.firebaseapp.com",
  projectId: "storyhub-f1225",
  storageBucket: "storyhub-f1225.appspot.com",
  messagingSenderId: "673448659511",
  appId: "1:673448659511:web:e87292a96a1490859b4db2"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
