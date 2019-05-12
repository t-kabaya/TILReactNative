import { Constants } from 'expo'
import {db} from './fireStoreConfig'

export const postTil = (til: string): void => {
  if (til) {
    db.collection("TIL").add({
      userId: Constants.installationId,
      tilContentText: "FIREBASEは素晴らしい",
      date: new Date()
    })
  }
}

export const getAllUserTil = async() => {
  // var TILRef = db.collection('TIL');
  var TILRef = db.collection('TIL')
  var response = await TILRef.get()
  const TIL = response.docs.map(item => item.data())

  console.log('TIL2',TIL)
  return TIL
}