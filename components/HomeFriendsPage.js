import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const DATA = [
    {
      title: "Friends",
      data: [["Long Nose Bitches ", "Greyhounds ", "Meela's Siblings "], ["Test", "Test1"]]
    },
    {
      title: "Groups",
      data: ["Long Nose Bitches", "Greyhounds", "Meela's Siblings"]
    }
  ];

  
const Item = ({ title, abuse }) => (
<View>
    <Text>{abuse}</Text>
    <Text>Name: {title[0]} Age: {title[1]} </Text>
    {console.log(title)}
</View>
);

const HomeFriendsPage = () => {
    return(
        <SafeAreaView>
        <SectionList
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Item title={item}/>}
          renderSectionHeader={({ section: { title } }) => (
            <StyledText >{title}</StyledText>
          )}
        />
      </SafeAreaView>
    )
}

export default HomeFriendsPage;

const StyledText = styled.Text`
    font-size: 20px;
    color: purple;
`