import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import dog from '../images/dog-cartoon-4841690_1920-removebg-preview.png'
const Separator = () => (
  <View style={styles.separator} />
);

const Login = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Button
        title="Login"
        onPress={() => Alert.alert('Simple Button pressed')}
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
  tinyLogo: {
    width: 300,
    height: 300,
  }
});

export default Login;