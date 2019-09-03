import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import MyTILScreen from '../screens/MyTILScreen'
import PostTilScreen from '../screens/PostTILScreen'

const HomeStack = createStackNavigator(
  {
    HomeScreen,
    PostTilScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'ホーム',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={'md-home'} />
      )
    }
  }
)

// HomeStack.navigationOptions = {
// }

const MyTILStack = createStackNavigator(
  {
    MyTILScreen
  },
  {
    headerMode: 'none',
    navigationOptions: {
      tabBarLabel: 'マイページ',
      tabBarIcon: ({ focused }) => (
        <TabBarIcon focused={focused} name={'md-person'} />
      )
    }
  }
)

export default createBottomTabNavigator(
  {
    HomeStack,
    MyTILStack
  },
  {
    headerMode: 'none'
  }
)
