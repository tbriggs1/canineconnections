import React from 'react';
import { Style, Text, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { ScrollView } from 'react-native-gesture-handler';
const SearchPage = () => {
    return(
         <ScrollView>
            <StyledView>
                <ButtonView>
                    <StyledButton> Search </StyledButton>
                    <StyledButton> Go Lucky </StyledButton>
                </ButtonView>
                <SearchForm />
                <SearchResults />
            </StyledView>
        </ScrollView>
    )
}

export default SearchPage;

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
    padding: 5px;
    padding-top: 7px;
    padding-bottom: 7px;
    color: white;
    background: blue;
    border-radius: 5px;
    width: 100px;
    text-align: center;
`