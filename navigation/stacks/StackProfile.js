import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Profile from "../../screens/Profile";
import YourAdvertisements from "../../screens/YourAdvertisements";
import UpdateAdvertisementForm from "../../screens/UpdateAdvertisementForm";
import CameraScreen from "../../screens/CameraScreen";
import LoginScreen from "../../screens/LoginScreen";

const Stack = createNativeStackNavigator();

const StackNavigationProfile = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="ProfileMain" component={Profile} />
            <Stack.Screen name="Your Advertisements" component={YourAdvertisements} />
            <Stack.Screen name="Update Advertisement Form" component={UpdateAdvertisementForm} />
            <Stack.Screen name="Camera Screen" component={CameraScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigationProfile;
