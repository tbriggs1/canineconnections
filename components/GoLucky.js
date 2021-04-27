import React from 'react';
import { Style, Text, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { ScrollView } from 'react-native-gesture-handler';
const GoLucky = () => {
    return(
         <ScrollView>
            <StyledView>
                <ButtonView>
                    <StyledTouchableOpacity
                        onPress={() => {
                            navigation.navigate('Homepage', {name: 'Homepage'})
                        }}
                    ><StyledButton> Message now! </StyledButton>
                    </StyledTouchableOpacity>
                    <StyledTouchableOpacity
                        onPress={() => {
                            navigation.navigate('Homepage', {name: 'Homepage'})
                        }}
                    ><StyledButton> Message now! </StyledButton>
                    </StyledTouchableOpacity>
                </ButtonView>
            </StyledView>
        </ScrollView>
    )
}

export default GoLucky;

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 200px;
`

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
  background: blue;
  padding: 9px;
  border-radius: 20px;
  margin-top: 10px;
  width: 110px;
`