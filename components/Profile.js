import React from 'react';
import { StyleSheet, TouchableOpacity, View, SafeAreaView, Text, Alert, Image } from 'react-native';
import { NavigationContainer,withNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styled from 'styled-components/native';
import { CoverPhoto, ProfilePicture } from './ProfileImages';
import { ScrollView } from 'react-native-gesture-handler';
import { ProfileFriends, ProfileGroups } from './ProfileCollections';

const Profile = () => (
    <ScrollView>
        <StyledView>
            <CoverPhoto image='https://raw.githubusercontent.com/tbriggs1/canineconnections/master/images/coverPic.jpg'/>
        </StyledView>
        <View>
            <ProfilePicture pImage='https://raw.githubusercontent.com/tbriggs1/canineconnections/master/images/profilepic.jpg' />
        </View>
        <View>
            <ProfileFriends />
            <ProfileGroups/>
        </View>
    </ScrollView>
    
);

const StyledView = styled.View`
    margin-top: 60px;
`



export default Profile;