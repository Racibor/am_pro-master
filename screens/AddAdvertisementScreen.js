import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Button, TextInput, Picker} from 'react-native';
import axios from "axios";

const AddAdvertisementScreen = ({navigation}) => {

    const [title, onChangeTextTitle] = React.useState("");
    const [description, onChangeTextDescription] = React.useState("");
    const [price, onChangePrice] = React.useState("");
    const [img, onChangeImg] = useState(null);
    const [selectedValue, setSelectedValue] = useState(null);

    const [categories, setCategories] = useState([
        {name: 'Odzieź', key: '1'},
        {name: 'Biologia', key: '2'}
    ]);

    const categoryItems = categories.map( (item) => {
        return <Picker.Item key={item.key} value={item.name} label={item.name}/>
    })

    useEffect( () => {
        navigation.addListener('focus', () => {
            axios.get(
                'http://10.0.2.2:8080/api/categories'
            ).then( (response) => {
                console.log("Pobrano kategorie z GET!");
                setCategories(response.data);
            }).catch( (error) => {
                console.log("Wykryto blad (ladowanie kategorii)!");
            });
        })
    }, []);

    const createAdvert = (title, desc, price, category, img) => {
        let advertisementRequestObj = {
            key: null,
            title: title,
            description: desc,
            price: price,
            category: category,
            base64Image: img
        }
        axios.post('http://10.0.2.2:8080/api/advertisements', advertisementRequestObj)
            .then( response => {
                console.log(response);

                onChangeTextTitle("");
                onChangeTextDescription("");
                onChangePrice("");
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


            <Picker
                selectedValue={selectedValue}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {categoryItems}
            </Picker>

            <Button
                title="Create Advertisement"
                onPress={() => createAdvert(title, description, price, selectedValue, img)}
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