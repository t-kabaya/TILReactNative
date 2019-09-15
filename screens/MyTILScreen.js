import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView
} from 'react-native'
import { NavigationEvents } from 'react-navigation'
import { getMyTil } from '../fireStore/ORM'
import TilListItem from '../components/TilListItem'
import Colors from '../constants/Colors'
import ActivityIndicator from '../components/ActivityIndicator'
import {
  loadInitialStateFromAsyncStorage,
  saveInitialStateInAsyncStorage
} from '../asyncStorage/myTilScreenAsyncStorage'

const MyTilScreen = props => {
  const [til, setTil] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    this.loadPersistedFeed()
    this.loadFeed()
  }, [])

  loadPersistedFeed = async () => {
    const til = await loadInitialStateFromAsyncStorage()
    if (til) {
      setTil(til)
      setIsLoading(false)
    }
  }

  loadFeed = async () => {
    const til = await getMyTil()
    saveInitialStateInAsyncStorage(til)
    setTil(til)
    setIsLoading(false)
  }

  return isLoading ? (
    <ActivityIndicator />
  ) : (
    <SafeAreaView style={S.safeAreaView}>
      <View style={S.container}>
        <View style={S.heading}>
          <Text style={S.headingTest}>私の歴史</Text>
        </View>

        <TilListItem til={til} navigate={props.navigation.navigate} />

        <TouchableOpacity
          onPress={() => props.navigation.navigate('PostTilScreen')}
          style={S.fab}
        >
          <Text style={S.fabIcon}>+</Text>
        </TouchableOpacity>
        <NavigationEvents onDidFocus={() => this.loadFeed()} />
      </View>
    </SafeAreaView>
  )
}

const S = StyleSheet.create({
  container: {
    flex: 1
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.tintColor
  },
  heading: {
    height: 60,
    backgroundColor: '#03A9F4',
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingTest: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  list: {
    margin: 5,
    backgroundColor: 'white',
    height: 80,
    justifyContent: 'space-around',
    paddingLeft: 10,
    elevation: 1
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 20,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  }
})

export default MyTilScreen
