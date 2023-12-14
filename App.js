import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Inicio from './pantallas/inicio';
import { initializeApp } from "firebase/app";
import 'firebase/auth';
import { getAnalytics } from "firebase/analytics";
export { auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAxNiwMZhcyu96Hjt9vDs2p86O1-JHE9HI",
  authDomain: "text2speach-f506f.firebaseapp.com",
  projectId: "text2speach-f506f",
  storageBucket: "text2speach-f506f.appspot.com",
  messagingSenderId: "964372714905",
  appId: "1:964372714905:web:51f98d9e86d3c2b279af08",
  measurementId: "G-7FG8FN95Z4"
};

export default function App() {
  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Inicio />
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
});
