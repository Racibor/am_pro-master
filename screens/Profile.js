import React,{useEffect,useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {StatusBar} from "expo-status-bar";
import {useDispatch, useSelector} from 'react-redux';
import {setLoginIn, setUsername} from "../navigation/navigationservice/navigationSlice";
import {NativeBaseProvider,Button} from "native-base";
import axios from "axios";

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
    <NativeBaseProvider>
        <View style={styles.container}>
            <View style={{backgroundColor:'#444' , margin:5,height:200 }}>
            <Text style={[styles.text,{fontSize:25,fontWeight:'bold'}]}>Profile Screen</Text>
            <Text style={styles.text}>{(isLogged)?"Logged in as "+userLogin:""}</Text>
            <Button
            style={{height:40,marginHorizontal:20,marginVertical:10}}
                            onPress={() => {
                                if(isLogged) {
                                    logoutHandler()
                                } else {
                                    navigation.navigate('LoginScreen')
                                }
                            }}
            >{isLogged ? "Logout": "Login"}
            </Button>

            <Button
            style={{height:40,marginHorizontal:20,marginVertical:10}}
            isDisabled = {!isLogged}
            onPress={() => navigation.navigate("Your Advertisements")}
            >{"Your Advertisements"}
            </Button>

            </View>
            <StatusBar style="auto" />
        </View>
    </NativeBaseProvider>
    );
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#111',
    },
        input: {
            backgroundColor: 'white',
            height: 40,
            marginHorizontal: 12,
            marginBottom: 12,
            borderWidth: 1,
            padding: 10,
        },
        text: {
            color: '#eee',
            fontSize: 17,
            marginLeft: 12,
        },
});