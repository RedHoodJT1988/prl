import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import { useDispatch, connect, useSelector } from 'react-redux'
import { readEvents, readProfiles, readCharity } from '../../../store/actions'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
    const dispatch = useDispatch()
    const events = useSelector(state => state.event.events);
    const charity = useSelector(state => state.charity.charities);
    let displayEvents = [];
    let displayCharity = [];
    if (events.length === 0) {
        dispatch(readEvents());
    } else {
        displayEvents = events.map((event, index) => {
            return (<View style={{ backgroundColor: Colors.blue }} key={index}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Book Event Screen")}>
                    <MaterialIcon name="basketball" color={Colors.white} />
                    <Text style={{ color: Colors.white }}>{event.eventName}</Text>
                    <MaterialIcon name="account-multiple" color={Colors.white} />
                    <Text style={{ color: Colors.white }}>{event.eventDescription}</Text>
                    <MaterialIcon name="calendar" color={Colors.white} />
                    <Text style={{ color: Colors.white }}>{event.eventDate}</Text>
                </TouchableOpacity>
            </View>)
        });
    }

    let pastEvents = [];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.userInfoSection}>
                <View style={{ flexDirection: 'row', marginTop: 15 }}>
                    <Avatar.Image
                        source={{
                            uri: 'https://api.adorable.io/avatars/80/abott@adorable.png',
                        }}
                        size={80}
                    />
                    <View style={{ marginLeft: 20 }}>
                        <Title style={[styles.title, {
                            marginTop: 15,
                            marginBOttom: 5,
                        }]}></Title>
                        <Caption style={styles.caption}></Caption>
                    </View>
                </View>
            </View>

            <Viw style={styles.userInfoSection}>
                <View style={styles.row}>
                    <Icon name="map-marker-radius" color='#777' size={20} />
                    <Text style={{ color: '#777', marginLeft: 20 }}>Azle, TX</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="phone" color='#777' size={20} />
                    <Text style={{ color: '#777', marginLeft: 20 }}>+1(469)446-1834</Text>
                </View>
                <View style={styles.row}>
                    <Icon name="email" color='#777' size={20} />
                    <Text style={{ color: '#777', marginLeft: 20 }}>jdawg@gmail.com</Text>
                </View>

            </Viw>

            <View style={styles.infoBoxWrapper}>
                <View style={styles.infoBox}>
                    <Text>Past Events</Text>
                    {pastEvents}
                </View>
                <View>
                    <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Past Scores</Text>
                    <Text>Coming Soon</Text>
                </View>
            </View>

            <View style={styles.menuWrapper}>

                <Text></Text>
            </View>
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    userInfoSection: {
        paddingHorizontal: 30,
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '500',
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    infoBoxWrapper: {
        borderBottomColor: '#ddddddd',
        borderBottomWidth: 1,
        borderTopColor: '#fff',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100
    },
    infoBox: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    menuItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 30,
    },
    menuItemText: {
        color: '#fff',
        marginLeft: 20,
        fontWeight: '600',
        fontSize: 16,
        lineHeight: 26,
    }
})