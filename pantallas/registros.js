import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet,TouchableOpacity, Alert } from 'react-native';
import { getFirestore, collection, addDoc, onSnapshot, query, orderBy, deleteDoc, doc } from 'firebase/firestore';

export default function RegistroScreen() {
  const [registros, setRegistros] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const db = getFirestore();
      const registrosCollection = collection(db, 'Registros');
      const registrosQuery = query(registrosCollection, orderBy('fecha', 'desc'));
      // aca se escuchan los cambios en la colección y se actualiza la lista
      const unsubscribe = onSnapshot(registrosCollection, (snapshot) => {
        const nuevosRegistros = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setRegistros(nuevosRegistros);
      });

      return () => unsubscribe();
    };

    fetchData();
  }, []);

  const handleEliminarRegistro = async (id) => {
    try {
      const db = getFirestore();
      const registroDoc = doc(db, 'Registros', id);
      await deleteDoc(registroDoc);
      Alert.alert('Éxito', 'Registro eliminado correctamente.');
    } catch (error) {
      console.error('Error al eliminar el registro:', error);
      Alert.alert('Error', 'Hubo un problema al intentar eliminar el registro.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registros</Text>
      <FlatList
        data={registros}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <View style={styles.registroItem}>
        <Text>{item.texto}</Text>
            {item.fecha && (
        <Text>{item.fecha.toDate().toLocaleString()}</Text>
    )}
    <TouchableOpacity onPress={() => handleEliminarRegistro(item.id)}>
              <Text style={styles.eliminarButton}>Eliminar</Text>
    </TouchableOpacity>
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
  eliminarButton: {
    color: 'red',
  },
});
