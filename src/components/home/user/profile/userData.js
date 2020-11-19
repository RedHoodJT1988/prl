import React, { useState } from 'react';
import { View, Picker } from 'react-native';
import { TextInput, Text, Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, connect, useSelector } from 'react-redux'
import { readProfile, writeProfile } from '../../../../store/actions'
import { Colors } from '../../../../../utils/tools';


const UserData = ({ navigation }) => {
    const [eventName, onChangeEventNameText] = useState('');
    const [nickName, onChangeNickNameText] = useState('');
    const dispatch = useDispatch()
    const [selectedValue, setSelectedValue] = useState("Event");
    const userId = useSelector(state => state.auth.userId);
    const profile = useSelector(state => state.profile.profile);

    const handleSubmit = async () => {
        // values.userId = userId;
        console.log('in the handleSubmit for user form')
        const values = { userId, event: eventName, nickname: nickName, charity: '' }
        await dispatch(writeProfile(values));
        const response = await dispatch(readProfile(userId));
        console.log(response);
    }

    const getInitial = async () => {
        const response = await dispatch(readProfile(userId));
        return response.payload;
    }

    return (
        <View style={{ backgroundColor: Colors.white, padding: 20 }}>
            <View style={{ backgroundColor: Colors.blue }}>
                <Text style={{ color: Colors.white }}>Nickname</Text>
                <TextInput
                    placeholder="Enter a nickname"
                    value={''}
                    mode="flat"
                    onChangeText={(text) => { onChangeNickNameText(text) }}
                    value={nickName}
                />
                <TextInput
                    label="Event"
                    value={''}
                    mode="flat"
                    onChangeText={(text) => { onChangeEventNameText(text) }}
                    value={eventName}
                />
                <Text style={{ color: Colors.white, alignItems: 'center', justifyContent: 'center' }}>
                    Event
                            <Picker
                        backgroundColor={Colors.white}
                        selectedValue={selectedValue}
                        style={{ width: '100%' }}
                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                    >
                        <Picker.Item label="Red Cross" value="Red Cross" />
                        <Picker.Item label="St. Judes" value="St. Judes" />
                        <Picker.Item label="Make A Wish" value="Make A Wish" />
                        <Picker.Item label="Boys and Girls Club" value="Boys and Girls Club" />
                    </Picker>
                </Text>
            </View>
            <View style={{ backgroundColor: Colors.red }}>
                <Text style={{ color: Colors.white, alignItems: 'center', justifyContent: 'center' }}>
                    Question 1 From DB
                        </Text>
                <TextInput
                    placeholder="Enter an answer"
                />
                <Text style={{ color: Colors.white, alignItems: 'center', justifyContent: 'center' }}>
                    Question 2 From DB
                        </Text>
                <TextInput
                    placeholder="Enter an answer"
                />
                <Text style={{ color: Colors.white, alignItems: 'center', justifyContent: 'center' }}>
                    Question 3 From DB
                        </Text>
                <TextInput
                    placeholder="Enter an answer"
                />
                <Text style={{ color: Colors.white, alignItems: 'center', justifyContent: 'center' }}>
                    Question 4 From DB
                        </Text>
                <TextInput
                    placeholder="Enter an answer"
                />
            </View>

            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'center', backgroundColor: Colors.white }}>
                <Text>Photo Label</Text>

                <Text>Video Label</Text>
                <Button
                    backgroundColor={Colors.red}
                    mode="contained"
                    onPress={() => handleSubmit()}
                >
                    Submit
                        </Button>
                <Button

                    mode="contained"
                    onPress={() => props.navigation.navigate("EditProfile")}
                >
                    Cancel
                        </Button>

            </View>
        </View>
    )
}

export default connect()(UserData);