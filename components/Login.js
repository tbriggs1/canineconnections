import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Separator = () => (
  <View style={styles.separator} />
);

const Login = ({ navigation }) => (
  <SafeAreaView style={styles.container}>
    <View  >
      <Button
        style={styles.button}
        title="Login"
        onPress={() => {
            navigation.navigate('Home', {name: 'Home'})
        }}
      />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
    homelogo: {
        marginHorizontal: 16,
    },
    container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 130,
    marginVertical: 150,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  button:{
      backgroundColor: 'pink',
      color: '#2d2d2d',
  },
});

export default Login;