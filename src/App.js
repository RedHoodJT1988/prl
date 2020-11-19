import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../utils/tools';


import { Stack, HomeStack, EventStack } from './Routes/stacks';
import BroadcastScreen from './components/home/broadcast';
import BookEventScreen from './components/home/event/bookEvent';
import AuthScreen from './components/auth';
import SideDrawer from '../utils/SideDrawer';
import ProfileScreen from './components/home/user/profile';
import WatchScreen from './components/home/event/watchEvent';
import EventScreen from './components/home/event';
import ScoresScreen from './components/home/scores';
import InviteScreen from './components/home/invitation';
import HightlightScreenFromProfile from './components/home/highlights/hightlightScreenFromProfile';
import UserData from './components/home/user/profile/userData';

const Drawer = createDrawerNavigator();

const MainDrawer = () => (
  <Drawer.Navigator
    drawerContent={(props) => <SideDrawer {...props} />}
    drawerStyle={{ backgroundColor: Colors.blue }}
  >
    <Drawer.Screen name="Home" component={HomeStack} />
    <Drawer.Screen name="BookEvents" component={BookEventScreen} />
    <Drawer.Screen name="Broadcast" component={BroadcastScreen} />
    <Drawer.Screen name="WatchScreen" component={WatchScreen} />
    <Drawer.Screen name="ScoresScreen" component={ScoresScreen} />
    <Drawer.Screen name="EventsScreen" component={EventScreen} />
    <Drawer.Screen name="Profile_screen" component={ProfileScreen} />
    <Drawer.Screen name="Invite" component={InviteScreen} />
    <Drawer.Screen name="Highlight" component={HightlightScreenFromProfile} />
    <Drawer.Screen name="UserData" component={UserData} />

  </Drawer.Navigator>
)

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="AuthScreen"
            component={AuthScreen}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Main"
            component={MainDrawer}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default connect()(App);