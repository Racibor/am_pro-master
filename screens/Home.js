import React from 'react';
import {StyleSheet} from "react-native";
import Tabs from "../navigation/tabs/MainTab";

const Home = () => {
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