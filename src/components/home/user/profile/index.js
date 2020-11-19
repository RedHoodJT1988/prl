import React from 'react';
import { View, Button, SafeAreaView, StyleSheet } from 'react-native';
import UserData from './userData';
import { Avatar, Title, Caption, Text, TouchableRipple } from 'react-native-paper';
import { readEvents, readProfileEvents } from '../../../../store/actions';
import { useDispatch, connect, useSelector } from 'react-redux'
import { Colors } from '../../../../../utils/tools';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const events = useSelector(state => state.event.events);
    const profileEvents = useSelector(state => state.profile.profileEvents);
    let profileShowEvents = [];
    let displayEvents = [];
    if (events.length === 0) {
        dispatch(readEvents());
    } else {
        displayEvents = events.map((event, index) => {
            return (<View style={{ backgroundColor: Colors.blue }} key={index}>a
                <Icon name="basketball" color={Colors.white} />
                <Text style={{ color: Colors.white }}>{event.eventName}</Text>
                <Icon name="account-multiple" color={Colors.white} />
                <Text style={{ color: Colors.white }}>{event.eventDescription}</Text>
                <Icon name="calendar" color={Colors.white} />
                <Text style={{ color: Colors.white }}>{event.eventDate}</Text>
            </View>)
        })
    }
    if (profileEvents.length === 0) {
        dispatch(readProfileEvents(profileEvents.userID));
    } else {
        profileShowEvents = profileEvents.map((profile, index) => {
            return (
                <SafeAreaView style={styles.container}>

                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={profileEvents.profileImage}
                                size={80}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Title style={[styles.title, {
                                    marginTop: 15,
                                    marginBottom: 5,
                                }]}>{profileEvents.profileFirstName}</Title>
                                <Caption style={styles.caption}>{profileEvents.profileA4}</Caption>
                            </View>
                        </View>
                    </View>

                    <View style={styles.userInfoSection}>
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
                            <Text style={{ color: '#777', marginLeft: 20 }}>{profileEvents.profileNickname}</Text>
                        </View>

                    </View>

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
                    <Button
                        title="Highlights"
                        onPress={() => navigation.navigate("Highlight")}
                    />
                    <Button
                        title="Edit"
                        onPress={() => navigation.navigate("UserData")}
                    />
                </SafeAreaView>

            )
            console.log(profileEvents);
        })
    }
    let pastEvents = [];
    return (

        <SafeAreaView style={styles.container}>
            {profileShowEvents}

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

            {/* //     <View style={styles.menuWrapper}>

        //         <Text></Text>
        //     </View>
        //     <Button
        //         title="Highlights"
        //         onPress={() => navigation.navigate("Highlight")}
        //     />
        //     <Button
        //         title="Edit"
        //         onPress={() => navigation.navigate("UserData")}
        //     /> */}
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
        borderBottomColor: '#fff',
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

export default connect()(ProfileScreen);