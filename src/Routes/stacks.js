import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../components/home/';
import ProfileScreen from '../components/home/user/profile';
import EventScreen from '../components/home/event/';
import BookEventScreen from '../components/home/event/bookEvent';

export const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home Screen">
            <Stack.Screen name="Home Screen" component={HomeScreen} />
            <Stack.Screen name="Profile Screen" component={ProfileScreen} />
            <Stack.Screen name="Event Screen" component={EventScreen} />
        </Stack.Navigator>
    )
}
