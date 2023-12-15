import React, { useEffect } from 'react';
import Navigation from './navigation';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase-config';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function App() {
  return (
      <Navigation />
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
