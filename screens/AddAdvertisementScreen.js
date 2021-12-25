import React, {Component, useRef} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Camera from "../sensors/Camera";
import CameraComponent from "../sensors/Camera";

class AddAdvertisementScreen extends Component{

    render() {

        return (
            <View style={styles.container}>
                <CameraComponent />
            </View>
        )

    }

}

export default AddAdvertisementScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8ac24a',
    }
});