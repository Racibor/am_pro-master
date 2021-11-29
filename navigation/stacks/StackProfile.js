import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Profile from "../../screens/ProfileMainPage";
import ProfileDetails from "../../screens/ProfileDetails";

const Stack = createNativeStackNavigator();

const StackNavigationProfile = ( {navigation} ) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        </Stack.Navigator>
    );
}

export default StackNavigationProfile;
