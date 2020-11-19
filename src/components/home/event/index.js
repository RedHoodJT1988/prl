import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '../../../../utils/tools';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, connect, useSelector } from 'react-redux'
import { readEvents } from '../../../store/actions'

const EventScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const events = useSelector(state => state.event.events);
    let displayEvents = [];
    if (events.length === 0) {
        dispatch(readEvents());
    } else {
        displayEvents = events.map((event, index) => {
            return (<View style={{ backgroundColor: Colors.blue }} key={index}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("BookEvents")}>
                    <MaterialIcon name="basketball" color={Colors.white} />
                    <Text style={{ color: Colors.white }}>{event.eventName}</Text>
                    <MaterialIcon name="account-multiple" color={Colors.white} />
                    <Text style={{ color: Colors.white }}>{event.eventDescription}</Text>
                    <MaterialIcon name="calendar" color={Colors.white} />
                    <Text style={{ color: Colors.white }}>{event.eventDate}</Text>
                </TouchableOpacity>
                <Button
                    title="Spots Available"
                />
            </View>)
        });
    }
    let pastEvents = [];
    let topCharities = [];
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Upcoming Events</Text>
            {displayEvents}
            <Text style={styles.title}>Past Events</Text>
            {pastEvents}
            <Text style={styles.title}>Top Charities</Text>
            {topCharities}
            <Button
                title="Event Highlights"
                onPress={() => navigation.navigate("HighlightEvents")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.black
    },
    button: {
        backgroundColor: Colors.white,
        color: Colors.black
    }
})

export default connect()(EventScreen); 
