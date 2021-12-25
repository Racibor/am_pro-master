import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ProfileMainPage from "../../screens/ProfileMainPage";
import ProfileDetails from "../../screens/ProfileDetails";

const Stack = createNativeStackNavigator();

const StackNavigationProfile = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="ProfileMainPage" component={ProfileMainPage} />
            <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        </Stack.Navigator>
    );
}

export default StackNavigationProfile;
