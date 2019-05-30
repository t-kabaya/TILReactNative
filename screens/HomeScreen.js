import React, {Component} from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StatusBar,
  SafeAreaView
} from 'react-native'
import {getAllUserTil} from '../fireStore/ORM'
import TilListItem from '../components/TilListItem'
import {NavigationEvents} from 'react-navigation';
import Layout from '../constants/Layout'
import Colors from '../constants/Colors'
import ActivityIndicator from '../components/ActivityIndicator'

export default class HomeScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      til: null,
      isLoading: true
    }
  }

  componentDidMount = async() => {
    this.loadFeed()
  }

  loadFeed = async() => {
    const til = await getAllUserTil()
    this.setState({til, isLoading: false})
  }

  render() {
    if (this.state.isLoading) return <ActivityIndicator />
    const { til } = this.state
    return (
      <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <StatusBar
          backgroundColor="red"
          barStyle="light-content"
        />
        <View style={styles.heading}>
          <Text style={styles.headingTest}>Today I Learned</Text>
        </View>

        <TilListItem til={til} />

        <TouchableOpacity onPress={() => this.props.navigation.navigate('PostTilScreen')} style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
        </TouchableOpacity>
        <NavigationEvents onDidFocus={() => this.loadFeed()} />

      </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
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
    justifyContent: 'center',
  },
  headingTest: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  list: {
    margin: 5,
    backgroundColor: 'white',
    height:80,
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
});
