import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from "./navigation/tabs/MainTab";
import Drawer from "./navigation/drawers/Drawer";
import Home from "./screens/Home";
import ImgToBase64 from 'react-native-image-base64';
import axios from "axios";

export default function App() {


  return (
	<NavigationContainer>
	    <Home/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
