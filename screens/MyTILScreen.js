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
  ActivityIndicator,
  SafeAreaView
} from 'react-native'
import {NavigationEvents} from 'react-navigation'
import {getMyTil} from '../fireStore/ORM'
import TilListItem from '../components/TilListItem'
import Layout from '../constants/Layout'
import Colors from '../constants/Colors'

export default class MyTilScreen extends Component {
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
    const til = await getMyTil()
    this.setState({til, isLoading: false})
  }

  render() {
    if (this.state.isLoading) return <ActivityIndicator />
    const { til } = this.state;
    return (
      <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headingTest}>私の歴史</Text>
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
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: Colors.tintColor
  },
  heading: {
    height: 60,
    backgroundColor: '#03A9F4',
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
    elevation: 8
  },
  fabIcon: {
    fontSize: 40,
    color: 'white'
  }
});
