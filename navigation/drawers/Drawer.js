import React from 'react'
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer'
import DrawerMenu from './DrawerMenu'
import FindScreen from '../../screens/FindScreen'
import ProfileScreen from '../../screens/ProfileScreen'
import Tabs from "../tabs/MainTab";
import Home from "../../screens/Home"
import axios from 'axios';

const Drawer = createDrawerNavigator()

const DrawerMenuContainer = (props) => {
  const { state, ...rest } = props
  const newState = { ...state }
  let categories = ['elektronika', 'odzież'];
  /*axios.get('http://192.168.1.24:8080/all')
            .then(function (res) {
              categories = res.data.map(e => {
                  return e['name'];
              });
            }).catch(function (err) {
              console.log(err);
            });*/
  return (
    <DrawerContentScrollView {...props}>
      <DrawerMenu {...props} />
      <DrawerItemList state={newState} {...rest} />
        {
            categories.map(e =>
            (<DrawerItem label={e}/>))
        }
    </DrawerContentScrollView>
  )
}

const DrawerNavigator = (props) => {
    return(
    <Drawer.Navigator initialRouteName="Home" drawerContent={DrawerMenuContainer}>
        <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
    )
 }
export default DrawerNavigator