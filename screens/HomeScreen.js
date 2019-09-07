import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  SafeAreaView
} from 'react-native'
import { getAllUserTil } from '../fireStore/ORM'
import TilListItem from '../components/TilListItem'
import { NavigationEvents } from 'react-navigation'
import Colors from '../constants/Colors'
import ActivityIndicator from '../components/ActivityIndicator'
import {
  loadInitialStateFromAsyncStorage,
  saveInitialStateInAsyncStorage
} from '../asyncStorage/homeScreenAsyncStorage'

const HomeScreen = props => {
  const [til, setTil] = useState(loadInitialStateFromAsyncStorage())
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    this.loadFeedFromAsyncStorage()
    this.loadFeed()
  }, [])

  loadFeedFromAsyncStorage = async () => {
    const til = await loadInitialStateFromAsyncStorage()
    if (!til) return
    setTil(til)
    setIsLoading(false)
  }

  loadFeed = async () => {
    const til = await getAllUserTil()
    saveInitialStateInAsyncStorage(til)
    setTil(til)
    setIsLoading(false)
  }

  if (isLoading) return <ActivityIndicator />
  return (
    <SafeAreaView style={S.safeAreaView}>
      <View style={S.container}>
        <StatusBar backgroundColor='red' barStyle='light-content' />
        <View style={S.heading}>
          <Text style={S.headingTest}>Today I Learned</Text>
        </View>

        <TilListItem til={til} />

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
    flex: 1,
    backgroundColor: Colors.tintColor
  },
  // safeAreaViewのstyleにflex: 1を加えたら治った。
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.tintColor
  },
  heading: {
    height: 60,
    backgroundColor: Colors.backgroundBaseColor,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headingTest: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    letterSpacing: 5
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
    elevation: 8,
    zIndex: 2
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  }
})

export default HomeScreen
