import React, { Component, useState } from 'react'
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  Alert
} from 'react-native'
import { postTil } from '../fireStore/ORM'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen'

const Editor = props => (
  <TextInput
    {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
    editable
    maxLength={40}
    autoFocus
    placeholder='例）30分 数学を勉強'
    multiline
    style={S.textInput}
  />
)

const PostTilScreen = props => {
  const [text, useText] = useState('')

  onPressSubmit = () => {
    const isSuccess = postTil(text)
    if (isSuccess) {
      props.navigation.goBack()
    } else {
      Alert.alert('投稿に失敗しました')
    }
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  return (
    <KeyboardAvoidingView>
      <View style={S.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <View style={S.materialButton}>
            <Text style={S.materialButtonText}>戻る</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.onPressSubmit}>
          <View style={S.materialButton}>
            <Text onPress={this.onPressSubmit} style={S.materialButtonText}>
              投稿
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <Editor onChangeText={text => this.setState({ text })} value={text} />
    </KeyboardAvoidingView>
  )
}

const S = StyleSheet.create({
  textInput: {
    height: 300,
    fontSize: 30
  },
  button: {
    alignSelf: 'flex-end'
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  materialButton: {
    marginVertical: hp('2%'),
    marginHorizontal: wp('4%'),
    width: wp('13%')
  },
  materialButtonText: {
    fontSize: wp('5.2%'),
    color: '#03A9F4',
    fontWeight: 'bold'
  }
})

export default PostTilScreen
