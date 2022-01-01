import React, {useState} from 'react';
import {View, StyleSheet, Button, TextInput} from 'react-native';
import axios from "axios";

const AddAdvertisementScreen = ({navigation}) => {

    const [title, onChangeTextTitle] = React.useState("");
    const [description, onChangeTextDescription] = React.useState("");
    const [price, onChangePrice] = React.useState("");
    const [img, onChangeImg] = useState(null);


    const createAdvert = (title, desc, price, img) => {
        let advertisementRequestObj = {
            key: null,
            title: title,
            description: desc,
            price: price,
            base64Image: img
        }
        axios.post('http://10.0.2.2:8080/api/advertisements', advertisementRequestObj)
            .then( response => {
                console.log(response);
            });
    };


    return (
        <View style={styles.container}>
            <Button
                title="Take photo"
                onPress={() => navigation.navigate("CameraScreen")}
            />

            <TextInput
                style={styles.input}
                value={title}
                onChangeText={onChangeTextTitle}
                placeholder="Title"
            />

            <TextInput
                style={styles.input}
                value={description}
                onChangeText={onChangeTextDescription}
                placeholder="Description"
            />

            <TextInput
                style={styles.input}
                value={price}
                onChangeText={onChangePrice}
                placeholder="Price"
                keyboardType="numeric"
            />

            <Button
                title="Create Advertisement"
                onPress={() => createAdvert(title, description, price, img)}
            />

        </View>
    );
}

export default AddAdvertisementScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8ac24a',
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: '50%',
    },
});