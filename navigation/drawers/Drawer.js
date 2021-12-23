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
                (<DrawerItem label={e}/>))
        }
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = (props) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get('http://192.168.1.24:8080/all')
                    .then(function (res) {
                      let tempCategories = res.data.map(e => {
                          return e['name'];
                      });
                      setCategories(tempCategories);
                    }).catch(function (err) {
                      setCategories(['test']);
                    });
    }, [])
    var cat = {categories}
    return(
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerMenuContainer{...cat}{...props}/>}>
        <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
    )
 }
export default DrawerNavigator