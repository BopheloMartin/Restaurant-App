import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Both from './components/Both'
import Login from './components/Login'
import Signup from './components/Signup';
import Home from './components/Home';
import Burgerpage from './components/Burgerpage';
import Burgerpage2 from './components/Burgerpage2';
import Order from './components/Order';

import Milkshake from './components/Milkshake';
import Coke from './components/Coke';

import { firebaseConfig } from './firebase-config';

export default function App() {

  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Both' component={Both} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Burgerpage' component={Burgerpage} />
        <Stack.Screen name='Burgerpage2' component={Burgerpage2} />
        <Stack.Screen name='Milkshake' component={Milkshake} />
        <Stack.Screen name='Coke' component={Coke} />
        <Stack.Screen name='Order' component={Order} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});