import React, { useState } from 'react'
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

const PostTilScreen = props => {
  const { navigation } = props
  const tilContentText = navigation.getParam('tilContentText', '')

  const [text, useText] = useState(tilContentText)

  onPressSubmit = () => {
    const isSuccess = postTil(text)
    if (isSuccess) {
      props.navigation.goBack()
    } else {
      Alert.alert('保存に失敗しました')
    }
  }

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
              保存
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      <TextInput
        maxLength={40}
        autoFocus
        placeholder='例）30分 数学を勉強'
        multiline
        style={S.textInput}
        onChangeText={input => useText(input)}
        value={text}
      />
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
