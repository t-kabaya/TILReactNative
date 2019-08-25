import { AsyncStorage } from 'react-native'

const key = 'myTilScreenInitialStateOfTil'

export const saveInitialStateInAsyncStorage = async til => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(til))
  } catch (e) {
    console.log('error at saveInitialStateFromAsyncStorage')
  }
}

export const loadInitialStateFromAsyncStorage = async () => {
  try {
    const value = await AsyncStorage.getItem(key)

    return JSON.parse(value)
  } catch (error) {
    // Error retrieving data
  }
}
