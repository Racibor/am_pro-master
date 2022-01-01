import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Profile from "../../screens/Profile";
import ProfileDetails from "../../screens/ProfileDetails";

const Stack = createNativeStackNavigator();

const StackNavigationProfile = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="ProfileMain" component={Profile} />
            <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        </Stack.Navigator>
    );
}

export default StackNavigationProfile;
