import React from 'react';
import { Style, Text, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import YourDogs from './YourDogs';

const HomeDogPage = () => {
    return(
        <View>
            <StyledText>
                Your Dogs:
            </StyledText>
            {/* Renders Dog Component with title (title=dog name) and image*/}
            <YourDogs name={'Meela'} image={'https://raw.githubusercontent.com/tbriggs1/canineconnections/master/images/WhatsApp%20Image%202021-04-13%20at%2013.53.47.jpeg'}/>
            <YourDogs name={'Fred'} image={'https://github.com/tbriggs1/canineconnections/blob/master/images/border-collie-gallery-outdoors-7-min.jpg?raw=true'}/>
            <YourDogs name={'Max'} image={'https://github.com/tbriggs1/canineconnections/blob/master/images/novascotiaducktollingretrieversf3.jpg?raw=true'}/>
        </View>
    )
}

export default HomeDogPage;

const StyledText = styled.Text`
    margin-top: 5px;
    margin-left: 30px;
    font-size: 20px;
`