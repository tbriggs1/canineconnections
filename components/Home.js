import React from 'react';
import { Style, Text, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import NavigationBar from './NavigationBar';

const Home = () => {
    return(
        <SafeAreaView> 
            <View>
                <StyledImage
                    source={{
                    uri: 'https://raw.githubusercontent.com/tbriggs1/alex_prod/main/pets-service-cartoon-landing-page-design-welcome-to-animal-store-concept-cute-dog-cat-pet-hotel-shop-veterinary-clinic-183606739.jpg',
                    }}
                />
                <StyledText>
                    Welcome to Canine Connections!
                </StyledText>
                <StyleText>
                    Click the button deploy to get started
                </StyleText>
            </View>
            <StyledView>
                <StyledTouchableOpacity
                        onPress={() => {
                        navigation.navigate('Homepage', {name: 'Homepage'})
                    }}
                    >
                        <StyledTexter> + Add Dog </StyledTexter>
                </StyledTouchableOpacity>
            </StyledView>
        </SafeAreaView>
    )
}

const StyledImage = styled.Image`
    height: 250px;
    width: 300px;
    margin-left:auto;
    margin-top: 120px;
    margin-right: auto;
    border-radius: 15px;
`

const StyledText = styled.Text`
    font-size: 24px;
    text-align: center;
    margin-top: 50px;
`

const StyleText = styled.Text`
    font-size: 18px;
    text-align: center;
    margin-top: 50px;
`

const StyledTouchableOpacity = styled.TouchableOpacity`
  background: white;
  border: 1px solid #894EFF;
  padding: 9px;
  border-radius: 20px;
  margin-top: 10px;
  width: 120px;
`

const StyledTexter = styled.Text`
  color: #894EFF;
  font-size: 16px;
  text-align: center;
`

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`


export default Home;