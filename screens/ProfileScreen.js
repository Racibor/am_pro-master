import React from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import {StatusBar} from "expo-status-bar";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import StackNavigationProfile from "../navigation/stacks/StackProfile";
import Drawer from "../navigation/drawers/Drawer";

// function HomeScreen({navigation}) {
//     return (
//         <View style={styles.container}>
//             <Text>Wikus to szef!</Text>
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details')}
//             />
//             <StatusBar style="auto" />
//         </View>
//     );
// }
//
// function ProfileDetails() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Text>Details Screen</Text>
//         </View>
//     );
// }
//
// const Stack = createNativeStackNavigator();

const ProfileScreen = ( {navigation} ) => {
    return (
            <StackNavigationProfile />
    );
}

export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8fcbbc',
    }
});