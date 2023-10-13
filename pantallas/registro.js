import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
export default function RegisterScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleRegister = () => {
      alert('Registro exitoso. ¡Bienvenido, ' + username + '!');
    };
