import React from 'react';
import { Style, Text, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import NavigationBar from './NavigationBar';

const Home = () => {
    return(
        <SafeAreaView> 
            <View>
                <Text>
                    HEllo
                </Text>
            </View>
        </SafeAreaView>
    )
}

const StyledImage = styled.Image`
    height: 150;
    width: 150;
    margin-left:auto;
    margin-right: auto;
`


export default Home;