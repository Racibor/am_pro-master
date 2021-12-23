import {StyleSheet} from "react-native";
import {View, Text} from 'react-native';
import React from 'react';

export default function AdvertisementDetails({navigation}){
    return (
        <View style={styles.container}>
            <Text>Details of Advertisement</Text>
            {/*<Text>{ navigation.getParam('title')}</Text>*/}
            {/*<Text>{ navigation.getParam('description')}</Text>*/}
            {/*<Text>{ navigation.getParam('price')}</Text>*/}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9e8acb',
    }
});