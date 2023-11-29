import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './pantallas/login';
import RegisterScreen from './pantallas/registro';
import HomeScreen from './pantallas/inicio';
export default function App() {
  return (
    <HomeScreen />
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
