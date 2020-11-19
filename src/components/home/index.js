import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Colors } from '../../../utils/tools';
import { Avatar, Header, SearchBar } from 'react-native-elements';
import { usersCollection } from '../../firebase';

const HomeScreen = ({ navigation }) => {
    const [search, setSearch] = useState('');

    return (
        <>
            <View>
                <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row' }}>
                    <Text>placeholder.</Text>
                    <Avatar
                        rounded
                        source={{
                            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                        }}
                        style={{ width: 150, height: 150, marginRight: 10 }}
                    />
                </View>
                <SearchBar
                    placeholder="Search for a player, charity or event"
                    onChangeText={(text) => setSearch(text)}
                />
                <View style={{ backgroundColor: Colors.gold }}>
                    <View style={styles.blueCard}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Invite")}
                        >
                            <Text style={styles.text}>See Invites</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.redCard}>
                        <TouchableOpacity>
                            <Text style={styles.text}>Enter an Event</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.blueCard}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Watch_Event_screen")}
                        >
                            <Text style={styles.text}>Watch an Event</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.redCard}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Create_Event_screen")}
                        >
                            <Text style={styles.text} >
                                Create an Event
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.blueCard}>
                        <Text style={styles.text}>Charities Supported</Text>
                    </View>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        color: '#fff'
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
        alignItems: 'flex-end',
        backgroundColor: '#fff'
    },
    iconRow: {
        flexDirection: 'row',
    },
    blueCard: {
        backgroundColor: Colors.blue,
        width: '100%',
        marginTop: 10,
        padding: 30,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    redCard: {
        backgroundColor: Colors.red,
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
        padding: 30,
        justifyContent: 'center'
    },
    whiteCard: {
        backgroundColor: '#FFF',
        width: '100%',
        alignItems: 'center',
        padding: 30,
        justifyContent: 'center'
    }
})

export default HomeScreen;