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

import { Constants } from 'expo'
db.collection("characters").add({
  userId: Constants.installationId,
  tilContentText: "FIREBASEは素晴らしい",
  date: new Date()
})

var citiesRef = db.collection('characters');
var allCities = citiesRef.get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        console.warn(doc.id, '=>', doc.data());
      });
    })
    .catch(err => {
      console.log('Error getting documents', err);
    });