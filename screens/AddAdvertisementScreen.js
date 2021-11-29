import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const AddAdvertisementScreen = ( {navigation} ) => {
    return (
        <View  style = {styles.container}>
            <Text>AddAdvertisement Screen</Text>
        </View>
    );
}

export default AddAdvertisementScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8498cb',
    }
});