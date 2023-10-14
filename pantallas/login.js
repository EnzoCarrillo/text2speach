import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      alert('Inicio de sesión exitoso. ¡Bienvenido, ' + username + '!');
    };
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Iniciar sesión</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button title="Iniciar sesión" onPress={handleLogin} />
        </View>
      );
    }