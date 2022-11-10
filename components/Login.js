import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import logo from './images/logo.png'

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebase-config';

import { useNavigation } from '@react-navigation/native';

export default function Login({navigation}) {

    const [ email, setEmail ] = React.useState('')
    const [ password, setPassword ] = React.useState('')
    const navigation = useNavigation()

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Signed in!')
            const user = userCredential.user
            console.log(user)
            navigation.navigate('Home')
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <View style={styles.container}>

        <Image source={logo} style={styles.image}/>

            <Text style={{marginBottom: 20, color: 'white'}}>Login</Text>
            <TextInput onChangeText={(text) => setEmail(text)} placeholder='Email' style={styles.input}></TextInput>
            <TextInput onChangeText={(text) => setPassword(text)} placeholder='Password' secureTextEntry style={styles.input}></TextInput>
            <Text style={{marginBottom: 30, color: 'white'}}>forgot password?</Text>

            <TouchableOpacity style={styles.btn} onPress={handleSignIn}>LOGIN</TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E0BB9D',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        backgroundColor: '#D2A383',
        color: '#D9D9D9',
        width: 250,
        height: 40,
        borderRadius: 10,
        paddingLeft: 15,
        marginBottom: 20
    },
    btn: {
        backgroundColor: '#D49C75',
        color: 'white',
        width: 150,
        height: 40,
        paddingLeft: 50,
        borderRadius: 10,
        justifyContent: 'center'
    },
    image: {
        width: 333,
        height: 300,
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
        marginBottom: 50
    }
});