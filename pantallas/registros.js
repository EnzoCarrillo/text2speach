import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { getFirestore, collection, addDoc, onSnapshot } from 'firebase/firestore';
import { auth } from 'App.js';

export default function RegistroScreen() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const registrosCollection = collection(db, 'registros');
      
      // aca se escuchan los cambios en la colección y se actualiza la lista
      const unsubscribe = onSnapshot(registrosCollection, (snapshot) => {
        const nuevosRegistros = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setRegistros(nuevosRegistros);
      });

      return () => unsubscribe();
    };

    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registros</Text>
      <FlatList
        data={registros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.registroItem}>
            <Text>{item.texto}</Text>
            {/* aca irian elementos del registro extra */}
          </View>
        )}
      />
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
  registroItem: {
    borderBottomWidth: 1,
    paddingVertical: 10,
    width: '80%',
  },
});
