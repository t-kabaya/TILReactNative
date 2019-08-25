import { Constants } from 'expo'
import { db } from './fireStoreConfig'
import { addFormattedPostTime } from '../logic/calcTilCardDateText'

export const postTil = tilText => {
  if (!tilText) return false

  try {
    db.collection('TIL').add({
      userId: Constants.installationId,
      tilContentText: tilText,
      date: new Date()
    })
    return true
  } catch (e) {
    return false
  }
}

// ここに、dateを与える処理を追加していく。
export const getAllUserTil = async () => {
  // var TILRef = db.collection('TIL');
  var TILRef = db.collection('TIL')
  var response = await TILRef.orderBy('date', 'desc').get()
  const TIL = response.docs.map(item => item.data())

  const TILWithPostTime = addFormattedPostTime(TIL)

  return TILWithPostTime
}

// ここに、ateを与える処理を追加していく。
export const getMyTil = async () => {
  // var TILRef = db.collection('TIL');
  var TILRef = db.collection('TIL')
  var response = await TILRef.orderBy('date', 'desc').get()
  const TIL = response.docs.map(item => item.data())
  const myTil = TIL.filter(til => til.userId === Constants.installationId)

  const TILWithPostTime = addFormattedPostTime(myTil)

  return TILWithPostTime
}

// フィルター関数群
