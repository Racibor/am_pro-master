import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import AddAdvertisementScreen from "../../screens/AddAdvertisementScreen";
import CameraScreen from "../../screens/CameraScreen";

const Stack = createNativeStackNavigator();

const StackNavigationProfile = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="AddAdvertisementScreen" component={AddAdvertisementScreen} />
            <Stack.Screen name="CameraScreen" component={CameraScreen} />
        </Stack.Navigator>
    );
}

export default StackNavigationProfile;
