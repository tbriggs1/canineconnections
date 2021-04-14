import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const HomeLogo = () => {
    return(
        <SafeAreaView> 
            <View>
                <StyledImage
                    source={{
                    uri: 'https://raw.githubusercontent.com/tbriggs1/alex_prod/main/dog.png',
                    }}
                />
            </View>
        </SafeAreaView>
    )
}


const StyledImage = styled.Image`
    height: 12rem;
    width: 12rem;
    margin-left:auto;
    margin-right: auto;
`

export default HomeLogo;