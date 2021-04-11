import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screen/home'
import Profile from '../screen/profile'
import Setting from '../screen/setting'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();


const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Home'}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;


// import React, { Component } from 'react';
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View, TouchableOpacity
// } from 'react-native';

// import { StackNavigator } from  'react-navigation';
// import IOSIcon from "react-native-vector-icons/Ionicons";
// import MainScreen from "../screen/home";
// import DetailScreen from "../screen/profile";

// const stackNav = StackNavigator({
//   Main : {
//     screen: MainScreen,
//     navigationOptions: ({navigation}) => ({
//       title: "Main",
//       headerLeft:(<TouchableOpacity onPress={() => navigation.navigate("DrawerOpen")}>
//                     <IOSIcon name="ios-menu" size={30} />
//                   </TouchableOpacity>
//       ),
//       headerStyle: { paddingRight: 10, paddingLeft: 15 }
//     })
//   },
//   Detail: {
//     screen: DetailScreen,
//     navigationOptions: ({navigation}) => ({
//       title: "Detail",
//     })     
//   }
// });

// export default stackNav;