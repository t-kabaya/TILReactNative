import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'
import MyTiLScreen from '../screens/MyTILScreen'
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

const MyTiLStack = createStackNavigator(
  {
    MyTiLScreen,
    PostTilScreen
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
    MyTiLStack
  },
  {
    headerMode: 'none'
  }
)
