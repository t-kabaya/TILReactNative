import React, { Component } from 'react';
import { AppRegistry, View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import {postTil} from '../fireStore/ORM'
import { Button } from 'react-native-elements';

class UselessTextInput extends Component {
  render() {
    return (
      <TextInput
        {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable = {true}
        maxLength = {40}
        autoFocus
        placeholder='今日学んだことは何ですか?'
        multiline
        style={styles.textInput}
      />
    );
  }
}

export default class UselessTextInputMultiline extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onPressSubmit = () => {
    postTil(this.state.text)
    this.props.navigation.goBack()
    console.log('success to post')
  }

  // If you type something in the text box that is a color, the background will change to that
  // color.
  render() {
    return (
     <View style={{
       borderBottomColor: '#000000',
       borderBottomWidth: 1 }}
     >
      <Button
        title="投稿する"
        onPress={this.onPressSubmit}
      />

       <UselessTextInput
         onChangeText={(text) => this.setState({text})}
         value={this.state.text}
       />
     </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 300,
    fontSize: 30
  },
  button: {
    alignSelf: 'flex-end'
  }
});
