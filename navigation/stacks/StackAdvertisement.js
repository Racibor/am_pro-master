import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import FindScreenMainPage from "../../screens/FindScreenMainPage";
import AdvertisementDetails from "../../screens/AdvertisementDetails";

const Stack = createNativeStackNavigator();

const StackNavigationAdvertisement = ( {navigation} ) => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name="FindScreenMainPage" component={FindScreenMainPage} />
            <Stack.Screen name="AdvertisementDetails" component={AdvertisementDetails} />
        </Stack.Navigator>
    );
}

export default StackNavigationAdvertisement;