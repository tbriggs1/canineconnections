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

export const FriendsFollowers = ({pImage}) => (
    <FriendsView>
        <StyledText>Following: 40</StyledText>
        <StyledText>Followers: 50</StyledText>
    </FriendsView>
)

export const ProfileName = () => (
    <ProfileView>
        <ProfileText>Slim Shady</ProfileText>
    </ProfileView>
)

export const SocialDetails = () => (
    <PicView>
        <StyledImage source={{ uri: 'https://raw.githubusercontent.com/tbriggs1/canineconnections/master/images/instagram.png', }} />
        <StyledImage source={{ uri: 'https://raw.githubusercontent.com/tbriggs1/canineconnections/master/images/youtube.png', }} />
        <StyledImage source={{ uri: 'https://raw.githubusercontent.com/tbriggs1/canineconnections/master/images/facebook.png', }} />
    </PicView>
)


const StyledText = styled.Text`
    font-size: 24px;
`

const ProfileText = styled.Text`
    font-size: 20px;
    
`

const ProfileView = styled.View`
   bottom: 140px;
   margin-left: 155px;
`

const PicView = styled.View`
   display:flex;
   flex-direction: row;
   bottom: 80px;
   margin-left: 150px;
`

const StyledView = styled.View`
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
    margin-top: 15px;
`


const FriendsView = styled.View`
    width: 320px;
    height: auto;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    margin-top: 15px;
    bottom: 80px;
    margin-left: 30px;
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

const StyledImage = styled.Image`
    height: 20px;
    width: 20px;
    margin-left: 10px;
`