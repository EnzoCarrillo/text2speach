import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      alert('Inicio de sesión exitoso. ¡Bienvenido, ' + username + '!');
    };
    