import React from 'react';
import { StyleSheet, TouchableOpacity, View, SafeAreaView, Text, Alert } from 'react-native';
import { NavigationContainer,withNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import Home from './Home'
const Separator = () => (
  <View style={styles.separator} />
);

const Login = ({ navigation }) => (
    <View>
      <StyledTouchableOpacity
         onPress={() => {
          navigation.navigate('Homepage', {name: 'Homepage'})
      }}
       >
         <StyledText> Login </StyledText>
      </StyledTouchableOpacity>
    </View>
);


const StyledTouchableOpacity = styled.TouchableOpacity`
  background: #894EFF;
  padding: 9px;
  border-radius: 20px;
  margin-top: 10px;
  width: 170px;
`

const StyledText = styled.Text`
  color: white;
  font-size: 20px;
  text-align: center;
`

export default Login;