import Constants from 'expo-constants'
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
    // 全体をtry catchで囲ってerrorを検出しているので以下の二文はいらない
    // .then(response => console.log(response))
    // .catch(() => console.log('error at postTil'))
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
