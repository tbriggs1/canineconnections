import React from 'react';
import { View, Image, StyleSheet, SafeAreaView } from 'react-native';

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 66,
        height: 58,
      },
})

const HomeLogo = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: 'https://raw.githubusercontent.com/tbriggs1/alex_prod/main/dog.png',
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

export default HomeLogo;