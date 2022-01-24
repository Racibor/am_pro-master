import React, {useEffect, useState} from 'react';
import {Pressable,View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Image, ImageBackground} from "react-native";
import AdvertisementCard from "../components/AdvertisementCard";
import axios from "axios";
import SearchBar from "../components/SeachBar";
import { Input, NativeBaseProvider } from "native-base";

const LoginScreen = (prop ) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    axios.defaults.withCredentials = true;

    return (
    <NativeBaseProvider>
        <View style={styles.container}>
            <Input
                            style={styles.input}
                            value={login}
                            onChangeText={setLogin}
                            placeholder="Title"
                        />
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
                                    global.logged = true;
                                    global.user = login
                                }).catch(function (err) {
                                    console.warn("Wykryto błąd (logowanie)");
                                });
                 }}
            />
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121212',
    }
});