import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Profile from "../../screens/Profile";
import YourAdvertisements from "../../screens/YourAdvertisements";
import UpdateAdvertisementForm from "../../screens/UpdateAdvertisementForm";

const Stack = createNativeStackNavigator();

const StackNavigationProfile = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="ProfileMain" component={Profile} />
            <Stack.Screen name="Your Advertisements" component={YourAdvertisements} />
            <Stack.Screen name="Update Advertisement Form" component={UpdateAdvertisementForm} />
        </Stack.Navigator>
    );
}

export default StackNavigationProfile;
