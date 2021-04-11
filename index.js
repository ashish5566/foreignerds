/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// import React, { Component } from 'react';
// import { AppRegistry, Dimensions } from 'react-native';
// import { DrawerNavigator } from 'react-navigation';

// import SideMenu from './SRC/screen/sidemenu'
// import stackNav from './SRC/navigation/navigation';
// import {name as appName} from './app.json';

// const drawernav = DrawerNavigator({
//   Item1: {
//       screen: stackNav,
//     }
//   }, {
//     contentComponent: SideMenu,
//     drawerWidth: Dimensions.get('window').width - 120,  
// });
// AppRegistry.registerComponent('appName', () => drawernav);