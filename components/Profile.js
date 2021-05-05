import React from 'react';
import { StyleSheet, TouchableOpacity, View, SafeAreaView, Text, Alert, Image } from 'react-native';
import { NavigationContainer,withNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import Home from './Home'
import { CoverPhoto, ProfilePicture } from './ProfileImages';
import { ScrollView } from 'react-native-gesture-handler';

const Profile = () => (
    <ScrollView>
        <View>
            <CoverPhoto image='https://raw.githubusercontent.com/tbriggs1/canineconnections/master/images/coverPic.jpg'/>
        </View>
        <View>
            <ProfilePicture pImage='https://raw.githubusercontent.com/tbriggs1/canineconnections/master/images/profilepic.jpg' />
        </View>
    </ScrollView>
    
);


// const StyledTouchableOpacity = styled.TouchableOpacity`
//   background: #894EFF;
//   padding: 9px;
//   border-radius: 20px;
//   margin-top: 10px;
//   width: 170px;
// `

// const StyledText = styled.Text`
//   color: white;
//   font-size: 20px;
//   text-align: center;
// `

const StyledImage = styled.Image`
    height:  140;
    width: 380;
    margin-left:auto;
    margin-right: auto;

`

export default Profile;