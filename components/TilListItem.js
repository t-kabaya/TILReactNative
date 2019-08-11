import React, { Component } from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ActivityIndicator
} from 'react-native'

const TilListItem = props => {
  const dateSec = props.til[0].date
  const parsedDate = new Date(dateSec * 1000)
  debugger
  return (
    <FlatList
      data={props.til}
      renderItem={({ item }) => (
        <View style={styles.list}>
          <Text style={styles.contentText} numberOfLines={5}>
            {item.tilContentText}
          </Text>
        </View>
      )}
    />
  )
}

export default TilListItem

const styles = StyleSheet.create({
  list: {
    margin: 5,
    backgroundColor: 'white',
    minHeight: 60,
    justifyContent: 'space-around',
    paddingHorizontal: 25,
    paddingVertical: 7,
    marginHorizontal: 20,
    marginVertical: 5,
    elevation: 1
  },
  contentText: {
    fontSize: 20,
    lineHeight: 27,
    letterSpacing: 3,
    fontWeight: 'bold',
    fontFamily: 'mplus'
  }
})
