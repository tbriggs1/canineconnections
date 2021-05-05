import React from 'react';
import { Style, Text, SafeAreaView, View, Button } from 'react-native';
import styled from 'styled-components/native';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { ScrollView } from 'react-native-gesture-handler';
import FetchCarousel, { animatedStyles1 } from './FetchCarousel';
const GoLucky = () => {
    return(
         <View>
            <View>
                <FetchCarousel />
                <ButtonView>
                    <StyledTouchableOpacity><StyledButton>Add Friend</StyledButton></StyledTouchableOpacity>
                    <StyledTouchableOpacity><StyledButton>Send Message</StyledButton></StyledTouchableOpacity>
                </ButtonView>
            </View>
        </View>
    )
}

export default GoLucky;

// const StyledView = styled.View`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-top: 200px;
// `

const ButtonView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const StyledButton = styled.Text`
    font-size: 10px;
    margin-left: 10px;
    color: white;
`


const StyledTouchableOpacity = styled.TouchableOpacity`
   background: red;
   padding: 9px;
   border-radius: 20px;
   margin-top: 10px;
   width: 110px;

`