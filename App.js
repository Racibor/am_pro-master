import * as React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import Home from "./screens/Home";
import {Provider} from "react-redux";
import store from "./components/redux/store";

global.logged = false;
global.username = "";



export default function App() {

  return (
      <Provider store={store}>
        <NavigationContainer>
            <Home/>
        </NavigationContainer>
      </Provider>
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
