import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import HomeLogo from './components/HomeLogo';
import Login from './components/Login';

export default function App() {
  return (
    <View>
      <HomeLogo />
      <Login />
    </View>
  );
}
