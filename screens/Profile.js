import React,{useEffect,useState} from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import {setLoginIn, setUsername} from "../navigation/navigationservice/navigationSlice";

const Profile = ({navigation} ) => {

    const dispatch = useDispatch();
    const {userLogin} = useSelector(state => state.nav);
    const {isLogged} = useSelector(state => state.nav);

    const logoutHandler = () => {
        axios.get('http://80.211.251.152:8080/logout')
        dispatch(setLoginIn(false));
        dispatch(setUsername());
    }

    return (
        <View style={styles.container}>
            <Text>Profile Screen</Text>
            <Text>{(isLogged)?"Logged in as "+userLogin:""}</Text>
            <Button
                title={isLogged ? "Logout": "Login"}
                onPress={() => {
                    if(isLogged) {
                        logoutHandler()
                    } else {
                        navigation.navigate('LoginScreen')
                    }
                }}
            />
            <Button
                title="Your Advertisements"
                onPress={() => navigation.navigate("Your Advertisements")}
            />
            <Button
               title="Go to Details"
               onPress={() => navigation.navigate('ProfileDetails')}
            />
            <StatusBar style="auto" />
        </View>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9e8acb',
    }
});