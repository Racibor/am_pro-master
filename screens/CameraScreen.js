import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import {useDispatch, useSelector} from "react-redux";
import {setImageUri} from "../navigation/navigationservice/navigationSlice";

export default function CameraScreen({navigation}) {
    const [hasPermission, setHasPermission] = useState(null);

    const dispatch = useDispatch();
    const {imageUri} = useSelector(state => state.nav);
    const {lastScreen} = useSelector(state => state.nav);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    if (hasPermission === null) {
        return <View />;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }



    return (
        <View style={styles.container}>
            <Camera style={styles.preview} type={Camera.Constants.Type.back}  ref={ref => {this.camera = ref;}}>
                <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={async () => {
                        if (this.camera) {
                            let photo = await this.camera.takePictureAsync({quality: 0.2,});
                            console.log(photo);
                            // global.tempImage = photo.uri;
                            dispatch(setImageUri(photo.uri));
                            navigation.goBack();
                        }
                    }} style={styles.capture}>
                        <Text style={{ fontSize: 14 }}> SNAP </Text>
                    </TouchableOpacity>
                </View>
            </Camera>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {        flex: 1,
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
        flex: 0.1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
});