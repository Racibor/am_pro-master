import React from 'react';
import {View, Text, StyleSheet} from "react-native";

const ProfileDetails = () => {
    return (
        <View style = {styles.container}>
            <Text>Profile Details Screen</Text>
        </View>
    );
}

export default ProfileDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9e8acb',
    }
});