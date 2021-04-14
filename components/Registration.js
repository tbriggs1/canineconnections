import React, {Component} from 'react';
import { View, Image, StyleSheet, Text, SafeAreaView } from 'react-native';
import HomeLogo from './HomeLogo';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';


const Registration = ({ navigation }) => {
    return(
        <SafeView>
            <View>
                <HomeLogo />
            </View>
            <StyledText> Welcome to Canine Connection! {"\n"} Please Sign in or Register! </StyledText>
            <StyledView>
                <Login navigation={navigation}/>
            </StyledView>
        </SafeView>
    )
}


const SafeView = styled.SafeAreaView`
    margin-top: 200;
    display:flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`

const StyledView = styled.View`
    
`

const StyledText = styled.Text`
    color: #2A2A2A;

`

export default Registration;