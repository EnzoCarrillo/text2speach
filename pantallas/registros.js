import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/firestore';

export default function LogScreen() {
  const [logData, setLogData] = useState([]);

  useEffect(() => {
    const unsubscribe = firebase
      .firestore()
      .collection('logs')
      .onSnapshot((snapshot) => {
        const logs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setLogData(logs);
      });

    return () => unsubscribe();
  }, []);

  return (
    <View>
      <Text>Registro de Reproducciones</Text>
      <FlatList
        data={logData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.timestamp.toDate().toString()}</Text>
            <Text>{item.audioText}</Text>
          </View>
        )}
      />
    </View>
  );
}