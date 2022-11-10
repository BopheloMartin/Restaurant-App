import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image} from 'react-native';
import logo from './images/logo.png'

import {Canvas, Box, BoxShadow, Fill, rrect, rect} from "@shopify/react-native-skia";

export default function Both({navigation}) {
  return(
    <View style={styles.container}>

    <Box style={styles.box1}>
    <Image source={logo} style={styles.image}/>
    </Box>

    <Box style={styles.box2}>
    <TouchableOpacity style={styles.btn}
    onPress={() => navigation.navigate('Login')}> LOGIN </TouchableOpacity>

    <TouchableOpacity style={styles.btn}
    onPress={() => navigation.navigate('Signup')}> SIGN UP </TouchableOpacity>
    </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E0BB9D'
  },
   btn: {
    backgroundColor: '#D49C75',
    color: 'white', 
    width: 150,
    height: 40,
    paddingLeft: 49,
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  image: {
    width: 333,
    height: 300,
    borderBottomStartRadius: 50,
    borderBottomEndRadius: 50
  },
  box1: {
    marginBottom: 109,
  },
  box2: {
    marginBottom: 80
  }
})