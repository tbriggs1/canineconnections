import React from 'react';
import { Style, Text } from 'react-native';
import styled from 'styled-components/native';


const Home = () => {
    return(
        <Style>
            <Text>Welcome to the Homescreen!</Text>
        </Style>
    )
}

const StyledImage = styled.Image`
    height: 150;
    width: 150;
    margin-left:auto;
    margin-right: auto;
`


export default Home;