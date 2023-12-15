import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

export default function Inicio() {
  const [textToSpeak, setTextToSpeak] = useState('');
  const [volume, setVolume] = useState(1.0);
  const [isPlaying, setPlaying] = useState(false);

  const db = getFirestore();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        Alert.alert('Error', 'Debes iniciar sesión para reproducir texto.');
      }
    });
      return () => unsubscribe();
  }, []);
  
  const playTextToSpeech = async () => {
    try {
      if (textToSpeak.trim() === '') {
        Alert.alert('Error', 'Ingresa un texto antes de reproducir.');
        return;
      }

      const auth = getAuth();
      const user = auth.currentUser;

      if (!user) {
        return;
      }

      await addDoc(collection(db, 'Registros'), {
        texto: textToSpeak,
        fecha: serverTimestamp(),
      });

      const { sound } = await Audio.Sound.createAsync(
        {
          uri: `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(textToSpeak)}&tl=en&client=tw-ob`,
        },
        { shouldPlay: true, volume: volume }
      );

      setPlaying(true);

      await sound.setOnPlaybackStatusUpdate((status) => {
        if (status.didJustFinish) {
          setPlaying(false);
        }
      });
    } catch (error) {
      console.error('Error al reproducir el texto:', error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Slider
        style={{ width: '100%', marginBottom: 16 }}
        value={volume}
        minimumValue={0}
        maximumValue={1}
        onValueChange={(value) => setVolume(value)}
        disabled={isPlaying}
      />
      <TextInput
        style={{
          height: 100,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 16,
          textAlignVertical: 'top',
          padding: 8,
        }}
        multiline
        placeholder="Ingresa el texto a convertir en audio..."
        value={textToSpeak}
        onChangeText={(text) => setTextToSpeak(text)}
      />
      <Button title={isPlaying ? 'Reproduciendo...' : 'Reproducir'} onPress={playTextToSpeech} disabled={isPlaying} />
    </View>
  );
}
