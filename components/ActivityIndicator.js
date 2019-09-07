import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../constants/Colors'
import { BarIndicator } from 'react-native-indicators'

const LoadingComponent = () => (
  <View style={S.container}>
    <BarIndicator count={5} color='white' size={50} />
  </View>
)

const S = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.backgroundBaseColor,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default LoadingComponent
