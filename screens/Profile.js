import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import {StatusBar} from "expo-status-bar";

const Profile = ({navigation} ) => {
    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Button
                title="Your Advertisements"
                onPress={() => navigation.navigate("Your Advertisements")}
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