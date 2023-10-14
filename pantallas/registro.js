import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = () => {
      alert('Registro exitoso. ¡Bienvenido, ' + username + '!');
    };
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Registro</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre de usuario"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Correo electrónico"
            value={email}
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <Button title="Registrarse" onPress={handleRegister} />
        </View>
      );
    }