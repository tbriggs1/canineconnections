import React, {Component} from 'react';
import { View, Image, StyleSheet, Text, TextInput, Button} from 'react-native';
import HomeLogo from './HomeLogo';
import Home from './Home';
import Login from './Login';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';


const Registration = ({ navigation }) => {
    return(
        <SafeView>
            <StyledTexth1>Canine Connections</StyledTexth1>
            <View>
                <HomeLogo />
            </View>
            <View>
                <StyledTouchableOpacity>
                <Text>Email:</Text>
                <StyledTextInput
                    style={{
                        height: 40,
                        borderColor: '#2D2D2D',
                        borderWidth: 1,
                        borderRadius: 20,
                        }}
                    />
                </StyledTouchableOpacity>
                <StyledTouchableOpacity>
                <Text>Password:</Text>
                <StyledTextInput
                    style={{
                        height: 40,
                        borderColor: '#2D2D2D',
                        borderWidth: 1,
                        borderRadius: 20,
                        }}
                    />
                </StyledTouchableOpacity>
            </View>
            <StyledView>
                <Login navigation={navigation}/>
            </StyledView>
            <FlexView>
                <FlexText>Signup</FlexText>
                <FlexText>Forgot Password?</FlexText>
            </FlexView>
        </SafeView>
    )
}


const SafeView = styled.SafeAreaView`
    margin-top: 150;
    display:flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
`

const StyledView = styled.View`
    
`

const StyledTouchableOpacity = styled.TouchableOpacity`
  background: transparent;
  padding: 9px;
  border-radius: 20;
  margin-top: 10;
`

const StyledTextInput = styled.TextInput`
    margin-top: 3;
`

const FlexText = styled.Text`
    cursor: pointer;
    font-size: 10px;
`
const FlexView = styled.View`
    display:inline-flex;
    cursor: pointer;
    margin-top: 0.5rem;
    gap: 50;
    flex-direction: row;
   
`

const StyledTexth1 = styled.Text`
    font-size: 26px;
    color: #020202;
`


export default Registration;