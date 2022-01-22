import React, { useState, useEffect } from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import Home from "../../screens/Home"
import axios from 'axios';
import StackNavigationAdvertisement from "../stacks/StackAdvertisement";

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }

  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
        {
           props.categories.map(e =>
                (<DrawerItem key={e['key']} label={e['name']}/>))
        }
    </DrawerContentScrollView>
  )
}

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

    var cat = {categories}
    /*return(
    <Drawer.Navigator drawerContent={(props) => <DrawerMenuContainer{...cat}{...props}/>}>
        <Drawer.Screen name="Find" component={FindScreen} />
    </Drawer.Navigator>
    )*/
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