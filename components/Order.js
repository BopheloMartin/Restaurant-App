import React, { useState } from 'react';
import { firebase } from '@react-native-firebase/auth';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Keyboard } from 'react-native';
import { firebaseConfig } from '../firebase-config';


export default function Order(){

    const todoRef = firebase.firestore().collection('newData')
    const [ addData, setAddData ] = useState('')

    const addField = () => {
        if(addData && addData.length > 0){
            const timestamp = firebase.firestore.FieldValue.serverTimestamp()
            const data = {
                heading: addData,
                createAt: timestamp
            };
            todoRef
            .add(data)
            .then(() => {
                setAddData('');
                Keyboard.dismiss();
            })
            .catch((error) => {
                alert(error)
            })
        }
    }

    return(
        <View style={styles.container}>
        <Text style={{ color: 'white', marginBottom: 20 }}>Placing Order</Text>
            <TextInput placeholder='Name' style={styles.input} onChangeText={(heading) => setAddData(heading)} value={addData} underlineColorAndroid='transparent' autoCapitalize='none' ></TextInput>
            <TextInput placeholder='Surname' style={styles.input} onChangeText={(heading) => setAddData(heading)} value={addData} underlineColorAndroid='transparent' autoCapitalize='none' ></TextInput>
            <TextInput placeholder='Phone number' style={styles.input} onChangeText={(heading) => setAddData(heading)} value={addData} underlineColorAndroid='transparent' autoCapitalize='none' ></TextInput>
            <TextInput placeholder='Code' style={styles.input} onChangeText={(heading) => setAddData(heading)} value={addData} underlineColorAndroid='transparent' autoCapitalize='none' ></TextInput>

            <TouchableOpacity style={styles.btn} onPress={addField} >Place Order</TouchableOpacity>
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
        paddingLeft: 35,
        borderRadius: 10,
        justifyContent: 'center'
    },
})