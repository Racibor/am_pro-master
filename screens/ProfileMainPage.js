import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import {StatusBar} from "expo-status-bar";

const ProfileMainPage = ( {navigation} ) => {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('ProfileDetails')}
            />
            <StatusBar style="auto" />
        </View>
    );
}

export default ProfileMainPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9e8acb',
    }
});