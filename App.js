import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Importa las pantallas desde la carpeta screens
import Pantalla from './assets/src/screens/Pantalla';
import Detalle from './assets/src/screens/Detalle';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pantalla" component={Pantalla} options={{ title: 'Eventos' }} />
        <Stack.Screen name="Detalle" component={Detalle} options={{ title: 'Detalle del Evento' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
