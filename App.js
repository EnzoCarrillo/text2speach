import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import LogScreen from './LogScreen';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './pantallas/login';
import RegisterScreen from './pantallas/registro';
import HomeScreen from './pantallas/inicio';
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Logs" component={LogScreen} />
        <Stack.Screen name="Main" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: 'AIzaSyAxNiwMZhcyu96Hjt9vDs2p86O1-JHE9HI',
  authDomain: 'text2speach-f506f.firebaseapp.com',
  projectId: 'text2speach-f506f',
  storageBucket: 'text2speach-f506f.appspot.com',
  messagingSenderId: '964372714905',
  appId: '1:964372714905:web:51f98d9e86d3c2b279af08',
  measurementId: "G-7FG8FN95Z4"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
