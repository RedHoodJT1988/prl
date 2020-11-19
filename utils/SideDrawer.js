import React from 'react';
import { DrawerContentScrollView } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Colors } from './tools';
import AuthScreen from '../src/components/auth';

const SideDrawer = (props) => {
    const mainOptions = [
        { title: 'Home', location: 'Home' },
        { title: 'Broadcast', location: 'Broadcast' },
        { title: 'Watch', location: 'WatchScreen' },
        { title: 'Events', location: 'EventsScreen' },
        { title: 'Scores', location: 'ScoresScreen' },
        { title: 'Profile', location: 'Profile_screen' }
    ]
    return (
        <DrawerContentScrollView>
            <View>
                {mainOptions.map((item) => (
                    <Button
                        key={item.location}
                        title={item.title}
                        onPress={() => props.navigation.navigate(item.location)}
                        buttonStyle={styles.drawerButton}
                        titleStyle={{ width: '100%' }}
                    />
                ))}
                <Button
                    title="Logout"
                    onPress={() => props.navigation.navigate(AuthScreen)}
                    buttonStyle={styles.drawerButton}
                    titleStyle={{ width: '100%' }}
                />
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    drawerButton: {
        backgroundColor: Colors.blue,
        borderBottomWidth: 1,
        borderBottomColor: Colors.blue
    }
})

export default SideDrawer;