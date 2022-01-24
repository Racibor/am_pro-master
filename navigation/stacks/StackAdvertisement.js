import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import FindScreen from "../../screens/FindScreen";
import AdvertisementDetails from "../../screens/AdvertisementDetails";

const Stack = createNativeStackNavigator();

const StackNavigationAdvertisement = (props) => {
    const cat = props.route['name']
    return (
        <Stack.Navigator>

            <Stack.Screen options={{headerShown: false}} name="FindScreenMainPage">
                { props => <FindScreen props={props} category={cat}/>}
            </Stack.Screen>
            <Stack.Screen name="AdvertisementDetails" component={AdvertisementDetails} />
        </Stack.Navigator>
    );
}

export default StackNavigationAdvertisement;