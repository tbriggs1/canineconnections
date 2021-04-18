import React from 'react';
import { Style, Text, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();


// Font Awesome Import
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Registration from './Registration';
import Login from './Login';
import Home from './Home';
import App from '../App';

const NavigationBar = () => {
    return(
        <View style={{flex:1, justifyContent:'flex-end'}}>
            <Tab.Navigator
        initialRouteName="Feed"
        activeColor="#e91e63"
        barStyle={{ backgroundColor: 'green' }
        }
        >
        <Tab.Screen
            name="Feed"
            component={Login}
            options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={Home}
            options={{
            tabBarLabel: 'Updates',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={Registration}
            options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
            }}
        />
        </Tab.Navigator>
    </View>
    )
}

const StyledImage = styled.Image`
    height: 150;
    width: 150;
    margin-left:auto;
    margin-right: auto;
`


export default NavigationBar;