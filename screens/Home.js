import React, {useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";
import Drawer from "../navigation/drawers/Drawer";
import Tabs from "../navigation/tabs/MainTab";

const Home = ( {navigation} ) => {
    return (
        <Tabs/>
    );
}

export default Home;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#9e8acb',
   }
});