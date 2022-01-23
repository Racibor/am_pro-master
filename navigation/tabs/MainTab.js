import React from 'react';
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../theme'
import StackNavigationProfile from "../stacks/StackProfile";
import StackCamera from "../stacks/StackCamera";
import Drawer from "../drawers/Drawer";

const MainTab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <MainTab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    switch (route.name) {
                        case 'Find':
                            return (
                                <FontIcon
                                    name="search"
                                    color={focused ? colors.black : colors.gray}
                                    size={25}
                                    solid
                                />
                            )
                        case 'Add':
                            return (
                                <FontIcon
                                    name="plus-circle"
                                    color={focused ? colors.black : colors.gray}
                                    size={25}
                                    solid
                                />
                            )
                        case 'Profile':
                            return (
                                <FontIcon
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
            <MainTab.Screen name="Drawer" component={Drawer} />
            <MainTab.Screen name="Add" component={StackCamera} />
            <MainTab.Screen name="Profile" component={StackNavigationProfile} />
        </MainTab.Navigator>
    );
}

export default Tabs;

