import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const FindScreen = ( {navigation} ) => {
    return (
        <View  style = {styles.container}>
            <Text>Find Screen</Text>
        </View>
    );
}

export default FindScreen;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#8fcbbc',
   }
});