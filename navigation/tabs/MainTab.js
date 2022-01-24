import React from 'react';
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon5 from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../theme'
import StackNavigationProfile from "../stacks/StackProfile";
import StackCamera from "../stacks/StackCamera";
import Drawer from "../drawers/Drawer";
import {useSelector} from "react-redux";

const MainTab = createBottomTabNavigator();

const Tabs = () => {

    const {isLogged} = useSelector(state => state.nav);

    return (
        <MainTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    switch (route.name) {
                        case 'Advertisements':
                            return (
                                <FontIcon5
                                    name="search"
                                    color={focused ? colors.black : colors.gray}
                                    size={25}
                                    solid
                                />
                            )
                        case 'Add':
                            return (
                                <FontIcon5
                                    name="plus-circle"
                                    color={focused ? colors.black : colors.gray}
                                    size={25}
                                    solid
                                />
                            )
                        case 'Profile':
                            return (
                                <FontIcon5
                                    name="user"
                                    color={focused ? colors.black : colors.gray}
                                    size={25}
                                    solid
                                />
                            )
                        default:
                            return <View />
                    }
                },
                headerShown: false
            })}
            tabBarOptions={{
                showLabel: true,
                labelStyle: {
                    color: "black",
                    fontSize: 12,
                    tabBarStyle: [
                        {
                            display: "flex"
                        },
                        null
                    ]
                }
            }}
        >
            <MainTab.Screen name="Advertisements" component={Drawer} />
            {isLogged && <MainTab.Screen name="Add" component={StackCamera} />}
            <MainTab.Screen name="Profile" component={StackNavigationProfile} />
        </MainTab.Navigator>
    );
}

export default Tabs;

