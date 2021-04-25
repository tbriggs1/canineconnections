import React, {useState} from 'react';
import { Style, Text, SafeAreaView, View, TextInput, Button } from 'react-native';
import styled from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';


const SearchForm = () => {
    const [sex, setSex] = useState('Male');
    const [age, setAge] = useState("0");
    return (
        <SafeAreaView> 
        <StyledView>
            <Text > Search </Text>
            <View>
            <FormView>
                <FormText>Breed: </FormText>
                <FormTextInput 
                    />
            </FormView>
            <FormView>
                <FormText>Location: </FormText>
                <FormTextInput
                />
            </FormView>
            <FormView>
                <FormText>Sex: </FormText>
                <Picker
                    selectedValue={sex}
                    onValueChange={currentSex => setSex(currentSex)}>
                    <Picker.Item label="Male" value="m" />
                    <Picker.Item label="Female" value="f" />
                </Picker>
                <FormText>Age: </FormText>
                <Picker
                    selectedValue={age}
                    onValueChange={currentAge => setAge(currentAge)}>              
                    <Picker.Item label="1" value="1" />
                    <Picker.Item label="31" value="31" />
                </Picker>
            </FormView>
            </View>
        </StyledView>
        <View>
            <StyledTouchableOpacity>
                <StyledText> Search Now! </StyledText>
            </StyledTouchableOpacity>
        </View>
    </SafeAreaView>
    );
}

export default SearchForm;

const StyledView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  background: wheat;
  min-width: 100%;
`
const FormView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
  padding-bottom: 10px;
  min-width: 100%;
  padding-right: 4px;
  padding-left: 4px;
`
const FormText = styled.Text`
    width: 100px;
    margin-left: 15px;
`

const FormTextInput = styled.TextInput`
    border: 1px solid #2D2D2D;
    border-radius: 15px;
    padding-left: 5px;
    padding: 5px;
    width: 200px;
`


const StyledTouchableOpacity = styled.TouchableOpacity`
  background: #894EFF;
  padding: 5px;
  border-radius: 20px;
  margin-top: 10px;
  width: 150px;
`

const StyledText = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
`