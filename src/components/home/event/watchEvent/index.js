//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const WatchScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Watch Screen</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});

//make this component available to the app
export default WatchScreen;
