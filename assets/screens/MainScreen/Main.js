import {FlatList, Text, View} from 'react-native';
import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from '../Home/Home';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {moderateScale} from 'react-native-size-matters';
import Profile from '../Profile/Profile';

const Tab = createMaterialTopTabNavigator();

export default class Main extends Component {
  render() {
    return (
      <Tab.Navigator
        initialRouteName="HOME"
        screenOptions={{
          tabBarScrollEnabled: true,
          tabBarLabelStyle: {
            fontSize: moderateScale(13),
            fontWeight: '400',
            color: 'white',
          },
          tabBarItemStyle: {width: 110, height: 40},
          tabBarStyle: {backgroundColor: 'black'},
        }}>
        <Tab.Screen name="HOME" component={Home} />
        <Tab.Screen name="TV" component={Profile} />
        <Tab.Screen name="WEB SHOWS" component={Home} />
        <Tab.Screen name="MOVIES" component={Home} />
        <Tab.Screen name="NEWS" component={Home} />
        <Tab.Screen name="MUSIC" component={Home} />
        <Tab.Screen name="BUZZ" component={Home} />
      </Tab.Navigator>
    );
  }
}
