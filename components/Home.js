import React from 'react';
import { Style, Text, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import NavigationBar from './NavigationBar';
import Hamburger from 'react-native-hamburger';
import { useState } from 'react';
import YourDogs from './YourDogs';
import { ScrollView } from 'react-native-gesture-handler';
import HomeDogPage from './HomeDogPage';
import HomeFriendsPage from './HomeFriendsPage';

const Home = () => {
    const [bugerMenu, setBurgerMenu] = useState(false);
    
    const changeMenu = () => {
        setBurgerMenu(!bugerMenu)
    }
    
    return(
        <ScrollView>
            <SafeAreaView> 
                {/* Burger Menu Styling */}
                <BurgerView>
                    {/* Burger Menu */}
                    <Hamburger active={bugerMenu}
                        type="spinCross"
                        color="purple"
                        onPress={changeMenu}
                        />
                </BurgerView>
                <HomeDogPage />
                <HomeFriendsPage />
            </SafeAreaView>
        </ScrollView>
    )
}

const BurgerView = styled.View`
    margin-left: 20px;
    margin-top: 90px;
`


export default Home;