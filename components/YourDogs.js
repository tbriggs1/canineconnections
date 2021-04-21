import React from 'react';
import { Style, Text, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';

const YourDogs = ({image,name}) => {
    // Dog Image
    return(
        <SafeAreaView>
            <StyledView>
                {/* For title...prefer to use over H1 heading */}
                <HeadingText>{name}</HeadingText>
            </StyledView>
            <StyledImage
                        source={{
                        uri: image,
                        }}
            />
        </SafeAreaView>
    )
}


const StyledImage = styled.Image`
    height: 150px;
    width: 200px;
    margin-left:auto;
    margin-top: 10px;
    margin-right: auto;
    border-radius: 15px;
`

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`

const HeadingText = styled.Text`
  color: #2D2D2D;
  font-size: 18px;
`

export default YourDogs;