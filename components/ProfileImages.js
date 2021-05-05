import React from 'react';
import { StyleSheet, TouchableOpacity, View, SafeAreaView, Text, Alert, Image } from 'react-native';
import { NavigationContainer,withNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';


export const CoverPhoto = ({image}) => (
    <View>
        <StyledImage source={{ uri: image, }} />
    </View>
);

export const ProfilePicture = ({pImage}) => (
    <View>
        <StyledProfileImage source={{ uri:pImage, }} />
    </View>
)



const StyledImage = styled.Image`
    height:  140;
    width: 400;
    margin-left:auto;
    margin-right: auto;

`

const StyledProfileImage = styled.Image`
    height:  140;
    width: 100;
    margin-left: 20px;
    bottom: 70px;
    border-radius: 15px;
`