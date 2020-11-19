import React, { useState, useCallback, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser, login } from '../../store/actions'
import Toast from 'react-native-toast-message';

import { Input, Button } from 'react-native-elements';
import { Colors, showToast } from '../../../utils/tools';

const AuthScreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [formType, setFormType] = useState(true);
    const [secureEntry, setSecureEntry] = useState(true);

    const handleSubmit = async (values) => {
        if (formType) {
            await dispatch(login(values))
            navigation.navigate("Main")
        } else {
            await dispatch(registerUser(values));
            setFormType(!formType)
        }
    }

    useEffect(() => {
        // showToast('error', 'sorry', 'error msg');
    })

    return (
        <ScrollView contentContainerStyle={styles.contentContainer}>
            <Image style={styles.logo} source={require('../../assets/PRLLogo600.png')} />
            <View style={styles.container}>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={Yup.object({
                        email: Yup.string().email('Invalid email address').required('The email is required'),
                        password: Yup.string().min(6, 'Must be more than 6 characters').max(10, 'Must be 10 or less').required('Password is required')
                    })}
                    onSubmit={values => handleSubmit(values)}
                >
                    {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
                        <>
                            <Input
                                placeholder="Email"
                                leftIcon={{ type: 'antdesign', name: 'mail', color: Colors.blue }}
                                inputStyle={styles.inputStyle}
                                placeholderTextColor={Colors.gray}
                                inputContainerStyle={styles.inputContainerStyle}
                                autoCapitalize='none'

                                renderErrorMessage={errors.email && touched.email}
                                errorMessage={errors.email}
                                errorStyle={{ color: Colors.red }}

                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                            />
                            <Input
                                placeholder="Password"
                                secureTextEntry={secureEntry}
                                leftIcon={{ type: 'antdesign', name: 'lock', color: Colors.blue }}
                                inputStyle={styles.inputStyle}
                                placeholderTextColor={Colors.blue}
                                inputContainerStyle={styles.inputContainerStyle}
                                rightIcon={{
                                    type: 'antdesign',
                                    name: secureEntry ? 'eye' : 'eyeo',
                                    onPress: () => setSecureEntry(!secureEntry)
                                }}

                                renderErrorMessage={errors.password && touched.password}
                                errorMessage={errors.password}
                                errorStyle={{ color: Colors.red }}

                                onChangeText={handleChange('password')}
                                onBlur={handleBlur('password')}
                                value={values.password}
                            />
                            <Button
                                title={formType ? 'Sign in' : 'Register'}
                                buttonStyle={{
                                    backgroundColor: Colors.red,
                                    marginTop: 20
                                }}
                                titleStyle={{ width: '100%' }}
                                onPress={handleSubmit}
                            // loading={}
                            />
                            <Button
                                type="clear"
                                title={`${formType ? 'Register?' : 'Sign in'}`}
                                buttonStyle={{
                                    marginTop: 20
                                }}
                                titleStyle={{ width: '100%', color: Colors.blue }}
                                onPress={() => setFormType(!formType)}
                            />
                        </>
                    )}
                </Formik>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        backgroundColor: '#fff',

    },
    container: {
        padding: 50,
        alignItems: 'center',

    },
    inputStyle: {
        fontSize: 15,
        color: Colors.blue
    },
    inputContainerStyle: {
        borderBottomWidth: 3,
        borderBottomColor: Colors.gold,
    },
    logo: {
        width: '100%',
        height: 150,
    }
})

export default AuthScreen;