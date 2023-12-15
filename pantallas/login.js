import React, { useState } from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { BlurView } from 'expo-blur';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase-config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const uri = 'https://e0.pxfuel.com/wallpapers/738/89/desktop-wallpaper-simple-minimalistic-best-phone-background-no-distractions-scenery-painting-nature-simple-sunset.jpg';
const profilePicture = 'https://avatars.mds.yandex.net/i?id=15fbc484b9c87922e4855105070a0f5a25fee8d7-9094507-images-thumbs&n=13';

export default function LoginScreen() {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const navigation = useNavigation();

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleCreateAccount = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Account created!')
      const user = userCredential.user;
      console.log(user)
    })
    .catch(error => {
      console.log(error)
      Alert.alert(error.message)
    })
  }

  const handleSingIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      console.log('Singed in!')
      const user = userCredential.user;
      console.log(user)
      navigation.navigate('Inicio');
    })
    .catch(error =>{
      console.log(error)
      Alert.alert(error.message)
    })
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri }} style={[styles.image, StyleSheet.absoluteFill]} />
      <ScrollView contentContainerStyle={{
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <BlurView intensity={90}>
          <View style={styles.login}>
            <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
            <View>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>E-mail</Text>
              <TextInput onChangeText={(text) => setEmail(text)} style={styles.input} placeholder='enzocarrillo25@gmail.com' />
            </View>
            <View>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Password</Text>
              <TextInput onChangeText={(text) => setPassword(text)} style={styles.input} placeholder='password' secureTextEntry={true} />
            </View>
            <TouchableOpacity onPress={handleSingIn} style={[styles.button, { backgroundColor: '#00CFEB90' }]}>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCreateAccount} style={[styles.button, { backgroundColor: '#6792F090' }]}>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </BlurView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  login: {
    width: 350,
    height: 500,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: 30,
  },
  input: {
    width: 250,
    height: 40,
    borderColor: '#fff',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ffffff90',
    marginBottom: 20,
  },
  button: {
    width: 250,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#00CFEB90',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
});
