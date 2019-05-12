import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MyTILScreen from '../screens/MyTILScreen';

const HomeStack = createStackNavigator({
  HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'ホーム',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-home'
        
      }
    />
  ),
};

const MyTILStack = createStackNavigator({
  MyTILScreen,
});

MyTILStack.navigationOptions = {
  tabBarLabel: 'マイページ',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-person'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  MyTILStack,
});
