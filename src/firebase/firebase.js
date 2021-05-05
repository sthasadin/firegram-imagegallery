import  firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAIq-4FMc9i9MsrYho1u2qn1gn1A4DT564",
    authDomain: "firegram-3caf5.firebaseapp.com",
    projectId: "firegram-3caf5",
    storageBucket: "firegram-3caf5.appspot.com",
    messagingSenderId: "376396774116",
    appId: "1:376396774116:web:c974cbac236627faa28af1",
    measurementId: "G-4J1V7N1GZE"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;


  export {projectStorage, projectFirestore, timestamp};