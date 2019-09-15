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
    // 本来はサーバからの返り値で、保存に成功したか判定するべき。

    return true
  } catch (e) {
    return false
  }
}

export const updateTil = (id, tilContentText) => {
  try {
    // console.warn({ id })
    // console.warn({ tilContentText })
    db.collection('TIL')
      .doc(id)
      .update({ tilContentText })
    console.warn('true')
  } catch (e) {
    console.log('error at updateTil')
  }
}

export const getAllUserTil = async () => {
  try {
    const TIL = await db
      .collection('TIL')
      .orderBy('date', 'desc')
      .get()
      .then(_parseResponse)

    const TILWithPostTime = addFormattedPostTime(TIL)

    return TILWithPostTime
  } catch (e) {
    console.log('error at getAllUserTil')
    return null
  }
}

export const getMyTil = async () => {
  try {
    const TIL = await db
      .collection('TIL')
      .orderBy('date', 'desc')
      .get()
      .then(_parseResponse)

    const myTil = TIL.filter(til => til.userId === Constants.installationId)

    const TILWithPostTime = addFormattedPostTime(myTil)

    return TILWithPostTime
  } catch (e) {
    console.log('error at getMyTil')
    return null
  }
}

// フィルター関数群

const _parseResponse = response =>
  response.docs.map(item => ({ id: item.id, ...item.data() }))
