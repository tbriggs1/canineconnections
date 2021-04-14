import React from 'react';
import { StyleSheet, TouchableOpacity, View, SafeAreaView, Text, Alert } from 'react-native';
import { NavigationContainer,withNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
const Separator = () => (
  <View style={styles.separator} />
);

const Login = ({ navigation }) => (
    <View>
      <StyledTouchableOpacity
         onPress={() => {
          navigation.navigate('Home', {name: 'Home'})
      }}
       >
         <StyledText> Get Started! </StyledText>
      </StyledTouchableOpacity>
    </View>
);


const StyledTouchableOpacity = styled.TouchableOpacity`
  background: #7732FF;
  padding: 5px;
  border-radius: 20;
  margin-top: 10;
`

const StyledText = styled.Text`
  color: white;
`

export default Login;