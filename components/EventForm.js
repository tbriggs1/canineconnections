import React, { Component } from 'react'

import{
    View,
    Text,
    TouchableHighLight,
} from 'react-native'

const EventForm = () => {
    const handleAddPress = () => {

    }

    return(
        <View>
            <TouchableHighLight
                onPress={handleAddPress}
            >
                <Text>Add</Text>
            </TouchableHighLight>
        </View>
    )
}