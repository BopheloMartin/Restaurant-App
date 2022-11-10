import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../firebase-config';

import { useNavigation } from '@react-navigation/native';


export default function Signup({navigation}) {

    const [ email, setEmail ] = React.useState('')
    const [ password, setPassword ] = React.useState('')
    const navigation = useNavigation()

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleCreateAccount = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log('Account created')
            const user = userCredential.user;
            console.log(user)
            navigation.navigate('Home')
        })
        .catch(error => {
            console.log(error)
            Alert.alert(error.message)
        })
    }


    return (
        <View style={styles.container}>

        <Image source={require('./images/logo.png')} style={styles.image}/>

            <Text style={{ color: 'white', marginBottom: 20 }}>Signup</Text>
            <TextInput placeholder='Full names' style={styles.input}></TextInput>
            <TextInput placeholder='Phone number' style={styles.input}></TextInput>
            <TextInput placeholder='Email' style={styles.input} onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput placeholder='Password' secureTextEntry style={styles.input} onChangeText={(text) => setPassword(text)}></TextInput>
            <TextInput placeholder='Conform password' secureTextEntry style={styles.input}></TextInput>

            <Text style={{ color: 'white', marginBottom: 30 }}>Already have an account?</Text>

            <TouchableOpacity onPress={handleCreateAccount} style={styles.btn}>SIGNUP</TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E0BB9D'
    },
    input: {
        backgroundColor: '#D2A383',
        color: '#D9D9D9',
        width: 250,
        height: 75,
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
        justifyContent: 'center',
        borderRadius: 10,
    },
    image: {
        width: 333,
        height: 300,
        borderBottomStartRadius: 50,
        borderBottomEndRadius: 50,
    },
});