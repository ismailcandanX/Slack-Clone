import firebase from 'firebase/compat/app'

import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2eDj2YHYcBzwJXQsWsG_a5RWm121FxFo",
  authDomain: "slack-clone-8d9f2.firebaseapp.com",
  projectId: "slack-clone-8d9f2",
  storageBucket: "slack-clone-8d9f2.appspot.com",
  messagingSenderId: "289809935381",
  appId: "1:289809935381:web:ce707e13477a9fb9ef321c",
  measurementId: "G-P8C7Y6XCEE"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export default db