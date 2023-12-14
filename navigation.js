import react from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

//aca van las pantallas importadas:
import Inicio from './pantallas/inicio';
import LoginScreen from './pantallas/login';
import RegistroScreen from './pantallas/registros';
import RegisterScreen from './pantallas/registro';

const Tab = createBottomTabNavigator();
function MyTabs(){
return(
    <Tab.Navigator
        initialRouteName='Registro'
        screenOptions={{
            tabBarActiveTintColor:'blue'
        }}
    >
        <Tab.Screen name="Inicio" component={Inicio} options={{
            tabBarIcon:({Color, size})=>(<MaterialCommunityIcons name="home" size={24} color="black" />)}} />
        <Tab.Screen name="Registros" component={RegistroScreen} options={{
            tabBarIcon:({Color, size})=>(<MaterialCommunityIcons name="android-messages" size={24} color="black" />)}} />
        <Tab.Screen name="Login" component={LoginScreen} options={{
            tabBarIcon:({Color, size})=>(<MaterialCommunityIcons name="account-check" size={24} color="black" />)}} />
        <Tab.Screen name="Registro" component={RegisterScreen} options={{
            tabBarIcon:({Color, size})=>(<MaterialCommunityIcons name="account-plus" size={24} color="black" />)}} />
    </Tab.Navigator>
);
}

export default function Navigation(){
    return(
        <NavigationContainer>
        <MyTabs />
        </NavigationContainer>
    );
}