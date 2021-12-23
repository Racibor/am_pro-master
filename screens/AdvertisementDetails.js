import {StyleSheet} from "react-native";
import {View, Text} from 'react-native';
import React from 'react';

export default function AdvertisementDetails({route}){

    let data = route.params;

    return (
        <View style={styles.container}>
            <Text>Details of Advertisement</Text>
            <Text>{ data.title }</Text>
            <Text>{ data.description }</Text>
            <Text>{ data.price }</Text>
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