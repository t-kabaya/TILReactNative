import firebase from 'firebase'
import '@firebase/firestore'
// import dbMock from './fireStoreMock'

import firebaseConfig from '../fireStoreConfig.json'

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()
