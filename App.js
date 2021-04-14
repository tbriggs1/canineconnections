import React from 'react';
import { View,SafeAreaView } from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Local Component Imports
import HomeLogo from './components/HomeLogo';
import Login from './components/Login';
import Registration from './components/Registration'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{headerShown: false}}>
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
