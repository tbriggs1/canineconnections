import React from 'react';
import { Style, Text, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import SearchForm from './SearchForm';

const SearchPage = () => {
    return(
        <StyledView>
            <SearchForm />
        </StyledView>
    )
}

export default SearchPage;

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 65px;
`

