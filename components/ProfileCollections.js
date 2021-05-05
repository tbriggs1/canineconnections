import React from 'react';
import { StyleSheet, TouchableOpacity, View, SafeAreaView, Text, Alert, Image } from 'react-native';
import { NavigationContainer,withNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';


export const ProfileFriends = () => (
    <StyledView>
        <StyledText>Dogs: 3</StyledText>
        <StyledTouchableOpacity
                        onPress={() => {
                            navigate('Homepage', {name: 'Homepage'})
                        }}
                    ><StyledButton> View </StyledButton>
                    </StyledTouchableOpacity>
    </StyledView>
);

export const ProfileGroups = ({pImage}) => (
    <StyledView>
        <StyledText>Groups: 5</StyledText>
        <StyledTouchableOpacity
                        onPress={() => {
                            navigate('Homepage', {name: 'Homepage'})
                        }}
                    ><StyledButton> View </StyledButton>
                    </StyledTouchableOpacity>
    </StyledView>
)


export const ProfileDetails = () => (
    <View>
        <Text>Slim Shady</Text>
    </View>
)

export const SocialDetails = () => (
    <View>

    </View>
)


const StyledText = styled.Text`
    font-size: 24px;
`

const StyledImage = styled.Image`
    height:  140;
    width: 400;
    margin-left:auto;
    margin-right: auto;

`

const StyledView= styled.View`
    width: 320px;
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 1px solid #2D2D2D;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
`

const StyledButton = styled.Text`
    font-size: 10px;
    color: white;
    font-size: 18px;
    text-align: center;
`


const StyledTouchableOpacity = styled.TouchableOpacity`
  background: blue;
  padding: 2px;
  border-radius: 20px;
  width: 80px;
  margin-left: 30px;
  
`