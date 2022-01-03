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
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios
            .get('http://10.0.2.2:8080/api/categories')
            .then(function (res) {
                setCategories(res.data);
            }).catch(function (err) {
                console.warn("Wykryto błąd (ładowanie drawera)");
            });
    }, []);

    var cat = {categories}
    return(
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerMenuContainer{...cat}{...props}/>}>
        <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
    )
 }
export default DrawerNavigator