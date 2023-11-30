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

    const AuthScreen = () => {
      const signInWithGoogle = async () => {
        try {
          const provider = new firebase.auth.GoogleAuthProvider();
          const result = await firebase.auth().signInWithPopup(provider);
          console.log(result.user);
        } catch (error) {
          console.error(error);
        }
      };
    
      return (
        <View>
          <Button title="Iniciar Sesión con Google" onPress={signInWithGoogle} />
        </View>
      );
    };
    
    const App = () => {
      const [user, setUser] = useState(null);
    
      useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
          if (authUser) {
            // El usuario está autenticado
            setUser(authUser);
          } else {
            // El usuario no está autenticado
            setUser(null);
          }
        });
    
        return () => {
          // Limpiar el efecto al desmontar el componente
          unsubscribe();
        };
      }, []);
    
      const signOut = async () => {
        try {
          await firebase.auth().signOut();
          console.log('Usuario cerró sesión');
        } catch (error) {
          console.error(error);
        }
      };
    
      return (
        <View>
          {user ? (
            <View>
              <Text>Bienvenido, {user.displayName}</Text>
              <Button title="Cerrar Sesión" onPress={signOut} />
            </View>
          ) : (
            <Text>No estás autenticado</Text>
          )}
        </View>
      );
    };
    
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