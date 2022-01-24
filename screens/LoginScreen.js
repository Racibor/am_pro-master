import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Button} from "react-native";
import axios from "axios";
import { Input, NativeBaseProvider } from "native-base";
import {useDispatch, useSelector} from 'react-redux';
import {setLoginIn, setUsername} from "../navigation/navigationservice/navigationSlice";

const LoginScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const {userLogin} = useSelector(state => state.nav);

    const [login, setLogin] = useState('')
    const [success, setSuccess] = useState(false)
    const [password, setPassword] = useState('')
    axios.defaults.withCredentials = true;

    useEffect(() => {
        console.warn(userLogin);
    }, [success, login]);

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
                            setSuccess(true);
                            dispatch(setLoginIn(true));
                            dispatch(setUsername(login));
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