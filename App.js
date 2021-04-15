import React from 'react';
import { View,SafeAreaView, StyleSheet } from 'react-native';

// Imported Styled Components

import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Local Component Imports
import HomeLogo from './components/HomeLogo';
import Login from './components/Login';
import Registration from './components/Registration'

const Stack = createStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export default function App() {
  return (  
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}} >
      <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen
          name="Home"
          component={HomeLogo}
          options={{ title: 'Welcome' }}
         
        />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
