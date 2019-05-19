import React from 'react'
import { Platform, StatusBar, StyleSheet, View } from 'react-native'
import { AppLoading, Asset, Font, Icon } from 'expo'
import AppNavigator from './navigation/AppNavigator'
import fireStoreConfig from './fireStore/fireStoreConfig'

export default class App extends React.Component {

  componentDidMount = () => {
    Font.loadAsync({
      mplus: require('./assets/fonts/mplus-1p-regular.ttf')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
