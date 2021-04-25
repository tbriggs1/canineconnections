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

