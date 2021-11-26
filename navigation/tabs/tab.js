import React, {Component} from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ProfileScreen from '../../screens/ProfileScreen'
import FindScreen from '../../screens/FindScreen'
import AddAdvertisementScreen from '../../screens/AddAdvertisementScreen'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../theme'


const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // eslint-disable-next-line react/prop-types
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
                style: {

                },
                labelStyle: {
                    fontSize: 12,
                }
            }}
        >
            <Tab.Screen name="Find" component={FindScreen} />
            <Tab.Screen name="Add" component={AddAdvertisementScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}

export default Tabs;

