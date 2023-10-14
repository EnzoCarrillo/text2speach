import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';

const client = new TextToSpeechClient();

export default function HomeScreen() {
  const [textToSpeak, setTextToSpeak] = useState('');
  const [audioUrl, setAudioUrl] = useState('');

  const handleTextToSpeech = async () => {
    try {
      const [response] = await client.synthesizeSpeech({
        input: { text: textToSpeak },
        voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL' },
        audioConfig: { audioEncoding: 'MP3' },
      });
    const audioData = response.audioContent;
    const audioBlob = new Blob([audioData], { type: 'audio/mp3' });
    const url = URL.createObjectURL(audioBlob);

    setAudioUrl(url);
  } catch (error) {
    console.error('Error en la conversión de texto a voz:', error);
  }
};}
