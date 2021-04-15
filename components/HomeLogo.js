import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const HomeLogo = () => {
    return(
        <SafeAreaView> 
            <View>
                <StyledImage
                    source={{
                    uri: 'https://raw.githubusercontent.com/tbriggs1/alex_prod/main/dog-removebg-preview.png',
                    }}
                />
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

export default HomeLogo;