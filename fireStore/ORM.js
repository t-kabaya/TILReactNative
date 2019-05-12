import { Constants } from 'expo'
import {db} from './fireStoreConfig'

export const postTil = (til: string): void => {
  if (til) {
    db.collection("TIL").add({
      userId: Constants.installationId,
      tilContentText: til,
      date: new Date()
    })
    // 本当は、.thenの後に続けて入れないといけないが、めんどいのでこれでいいや
    console.log('success to post TIL')
  }
}

export const getAllUserTil = async() => {
  // var TILRef = db.collection('TIL');
  var TILRef = db.collection('TIL')
  var response = await TILRef.orderBy('date', 'desc').get()
  const TIL = response.docs.map(item => item.data())

  console.log('TIL2',TIL)
  return TIL
}

export const getMyTil = async() => {
  // var TILRef = db.collection('TIL');
  var TILRef = db.collection('TIL')
  var response = await TILRef.orderBy('date', 'desc').get()
  const TIL = response.docs.map(item => item.data())
  const myTil = TIL.filter(til => til.userId === Constants.installationId)
  return myTil
}