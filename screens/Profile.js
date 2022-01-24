import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import {StatusBar} from "expo-status-bar";

const Profile = ({navigation} ) => {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button
                title="Login"
                onPress={() => navigation.navigate('LoginScreen')}
            />
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('ProfileDetails')}
            />
            <StatusBar style="auto" />
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9e8acb',
    }
});