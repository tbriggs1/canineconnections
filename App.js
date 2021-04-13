import React from 'react';
import { View,SafeAreaView } from 'react-native';
import HomeLogo from './components/HomeLogo';
import Login from './components/Login';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
       <Stack.Screen name="Profile" component={Login} options={{title: 'Button'}} />
        <Stack.Screen
          name="Home"
          component={HomeLogo}
          options={{ title: 'Welcome' }}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
