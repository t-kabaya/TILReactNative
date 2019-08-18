import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../constants/Colors'
import { BarIndicator } from 'react-native-indicators'

export default class LoadingComponent extends Component {
  render () {
    return (
      <View style={styles.container}>
        <BarIndicator count={5} color='white' size={50} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundBaseColor,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation: {
    width: 100,
    height: 100
    // backgroundColor: 'transparent'
  }
})
