import React from 'react';
import { Style, Text, SafeAreaView, View } from 'react-native';
import styled from 'styled-components/native';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationContainer,withNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GoLucky from './GoLucky';

const SearchPage = ({ navigation }) => {
    return(
         <ScrollView>
            <StyledView>
                <ButtonView>
                    <StyledTouchableOpacity
                        onPress={() => {
                            navigate('Homepage', {name: 'Homepage'})
                        }}
                    ><StyledButton> Search </StyledButton>
                    </StyledTouchableOpacity>
                    <StyledTouchableOpacity
                        onPress={() => {
                            navigate('Homepage', {name: 'Homepage'})
                        }}
                    ><StyledButton> Message now! </StyledButton>
                    </StyledTouchableOpacity>
                </ButtonView>
                <GoLucky />
                {/* <SearchForm />
                <SearchResults /> */}
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
    color: white;
`


const StyledTouchableOpacity = styled.TouchableOpacity`
  background: blue;
  padding: 9px;
  border-radius: 20px;
  margin-top: 10px;
  width: 110px;
`