import firebase from 'firebase'
import '@firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyD9DD0D_67R_Zel3UiMWt5f_RF5dEB-qWE",
  authDomain: "til-recat-native.firebaseapp.com",
  databaseURL: "https://til-recat-native.firebaseio.com",
  projectId: "til-recat-native",
  storageBucket: "til-recat-native.appspot.com",
  messagingSenderId: "694657731060",
  appId: "1:694657731060:web:a3ec2892421ddff6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
