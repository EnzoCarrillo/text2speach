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
return (
  <View style={styles.container}>
    <Text style={styles.title}>Text to Speech App</Text>
    <TextInput
      style={styles.input}
      placeholder="Texto para convertir a voz"
      value={textToSpeak}
      onChangeText={text => setTextToSpeak(text)}
    />
    <Button title="Convertir Texto a Voz" onPress={handleTextToSpeech} />
    {audioUrl && (
      <audio controls>
        <source src={audioUrl} type="audio/mp3" />
      </audio>
    )}
  </View>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
