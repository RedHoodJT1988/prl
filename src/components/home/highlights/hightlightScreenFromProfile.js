//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../../../../utils/tools';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// create a component
const HightlightScreenFromProfile = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Name of Event Fundraiser</Text>
            <Text style={styles.text}>Descritpion of the fundraiser</Text>
            <Icon name="crosshairs-gps" size={22} color={Colors.white}></Icon>
            <Text style={styles.text}>Location of Event</Text><Icon color={Colors.white} name="navigation" size={20}></Icon>
            <Icon name="basketball" size={22} color={Colors.white}></Icon>
            <Text style={styles.text}>Game Name</Text>
            <Icon name="account-group" size={22} color={Colors.white}></Icon>
            <Text style={styles.text}>Number of Players</Text>
            <View style={styles.logo}>
                <Icon name="trophy" size={50} color={Colors.white}></Icon>
                <Text style={styles.text}>Name of player</Text>
                <Text style={styles.text}>Amount Raised</Text>
            </View>
            <View>
                <Text style={styles.title}>Bracket for event</Text>
                <Text style={styles.text}>Placeholder - 4</Text>
                <Text style={styles.text}>Placeholder - 1</Text>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.blue,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.white
    },
    text: {
        color: Colors.white
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
        color: Colors.white
    }
});

//make this component available to the app
export default HightlightScreenFromProfile;
