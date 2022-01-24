import React, { useState, useEffect } from 'react'
import {
  createDrawerNavigator,
} from '@react-navigation/drawer'
import axios from 'axios';
import StackNavigationAdvertisement from "../stacks/StackAdvertisement";

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    const [categories, setCategories] = useState([{key: 0, name: 't'}]);

    useEffect(() => {
        axios
            .get('http://80.211.251.152:8080/api/categories')
            .then(function (res) {
                setCategories(res.data);
            }).catch(function (err) {
                console.warn("Wykryto błąd (ładowanie drawera)");
            });
    }, []);

    return(
        <Drawer.Navigator>
            {
                categories.map(e =>
                                (<Drawer.Screen name={e['name']} component={StackNavigationAdvertisement}{...e['name']}/>))
            }
        </Drawer.Navigator>
        )
 }
export default DrawerNavigator