import React, { useState } from 'react';
import { Image, Text, StyleSheet, View, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native';
import { BlurView } from 'expo-blur';

const uri = 'https://e0.pxfuel.com/wallpapers/738/89/desktop-wallpaper-simple-minimalistic-best-phone-background-no-distractions-scenery-painting-nature-simple-sunset.jpg';
const profilePicture = 'https://avatars.mds.yandex.net/i?id=15fbc484b9c87922e4855105070a0f5a25fee8d7-9094507-images-thumbs&n=13';

export default function LoginScreen() {
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
              <TextInput style={styles.input} placeholder='exampleE-mail@gmail.com' />
            </View>
            <View>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Password</Text>
              <TextInput style={styles.input} placeholder='password' secureTextEntry={true} />
            </View>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#00CFEB90' }]}>
              <Text style={{ fontSize: 17, fontWeight: '400', color: 'white' }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: '#6792F090' }]}>
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
