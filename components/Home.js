import React from 'react';
import { Style, Text, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import NavigationBar from './NavigationBar';
import Hamburger from 'react-native-hamburger';
import { useState } from 'react';
import YourDogs from './YourDogs';
import { ScrollView } from 'react-native-gesture-handler';

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
                {/* Renders Dog Component with title (title=dog name) and image*/}
                <YourDogs name={'Meela'} image={'https://raw.githubusercontent.com/tbriggs1/canineconnections/master/images/WhatsApp%20Image%202021-04-13%20at%2013.53.47.jpeg'}/>
                <YourDogs name={'Fred'} image={'https://github.com/tbriggs1/canineconnections/blob/master/images/border-collie-gallery-outdoors-7-min.jpg?raw=true'}/>
                <YourDogs name={'Fred'} image={'https://github.com/tbriggs1/canineconnections/blob/master/images/border-collie-gallery-outdoors-7-min.jpg?raw=true'}/>
            </SafeAreaView>
        </ScrollView>
    )
}

const BurgerView = styled.View`
    margin-left: 20px;
    margin-top: 90px;
`

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`

const StyledImage = styled.Image`
    height: 250px;
    width: 300px;
    margin-left:auto;
    margin-top: 10px;
    margin-right: auto;
    border-radius: 15px;
`

export default Home;