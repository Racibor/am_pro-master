import React, {useEffect, useState} from 'react';
import {Pressable,View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Image, ImageBackground} from "react-native";
import AdvertisementCard from "../components/AdvertisementCard";
import axios from "axios";
import SearchBar from "../components/SeachBar";
import { Input, NativeBaseProvider } from "native-base";
import {useDispatch, useSelector} from 'react-redux';
import setLogin from "../navigation/navigationservice/navigationSlice";

const LoginScreen = ({navigation} ) => {
    const dispatch = useDispatch();
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    axios.defaults.withCredentials = true;

    return (
    <NativeBaseProvider>
        <View style={styles.container}>
            <View style={{backgroundColor:'#444' , margin:5 }}>
            <Text style={[styles.text,{fontSize:30}]}>{"Sign in to your account:"}</Text>
            <Text style={styles.text}>Login:</Text>
            <Input
                            style={styles.input}
                            value={login}
                            onChangeText={setLogin}
                            placeholder="Title"
                        />
                     <Text style={styles.text}>Password:</Text>
            <Input
                            style={styles.input}
                            value={password}
                            onChangeText={setPassword}
                            placeholder="Title"
                        />
            <Button
                 title="Login"
                 onPress={() => {
                    let params = {'asd':''}
                    axios.post('http://80.211.251.152:8080/login', params, {headers: {
                        'Authentication': login + ':' + password
                    }})
                                .then(function (res) {
                                dispatch(setLogin(true));
                                    navigation.goBack();
                                }).catch(function (err) {
                                    console.warn("Wykryto błąd (logowanie)");
                                });
                 }}
            />
                                </View>
        </View>
        </NativeBaseProvider>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({

    advertImage: {
        flex:1,
        aspectRatio: 1.5,
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#000',
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