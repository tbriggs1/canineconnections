import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar, Button, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const DATA = [
    {
      title: "Top Groups",
      data: [
      ["https://raw.githubusercontent.com/tbriggs1/canineconnections/master/images/fast-dogs.jpg", "Long-nose Bitches", 203, 0], 
      ["https://raw.githubusercontent.com/tbriggs1/canineconnections/master/images/cuddly.jpg", "Cuddly Dogs", 2040, 3],
      ["https://raw.githubusercontent.com/tbriggs1/canineconnections/master/images/siblings.jpg", "Siblings", 5, 2]
    ]
    }
  ];

  
const Item = ({ title }) => (
<FriendsView>
    <StyledImage
      source={{
      uri:title[0],
      }}
    />
    <TextView>
      <Text><TitleText>Group:</TitleText> {title[1]}</Text>
      <Text><TitleText>Members:</TitleText> {title[2]} </Text>
      <Text><TitleText>Events:</TitleText> {title[3]}</Text>
    </TextView>
    <View>
      <StyledTouchableOpacity
          onPress={() => {
            navigation.navigate('Homepage', {name: 'Homepage'})
        }}
      >
        <StyledButton> Message now! </StyledButton>
      </StyledTouchableOpacity>
    </View>
</FriendsView>
);

const TopGroups = () => {
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

export default TopGroups;

const StyledText = styled.Text`
    font-size: 20px;
    margin-left: 10px;
    color: blue;
    margin-top: 25px;
`

const FriendsView = styled.View`
    margin-top: 15px;
    border: 1px solid black;
    display:flex;
    flex-direction: row;
    align-items: center;
`

const TextView = styled.View`
    width: 120px;
`

const StyledImage = styled.Image`
    height: 100px;
    width: 90px;
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 15px;
    margin-left: 5px;
    margin-right: 30px;
`

const StyledTouchableOpacity = styled.TouchableOpacity`
  background: #894EFF;
  padding: 9px;
  border-radius: 20px;
  margin-top: 10px;
  width: 110px;
`

const StyledButton = styled.Text`
    font-size: 10px;
    margin-left: 10px;
    color: white;
`

const TitleText = styled.Text`
    font-weight: bold;
   
`