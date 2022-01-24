import React, {useEffect, useState} from 'react';
import {Text,View, StyleSheet, Picker,ImageBackground,ScrollView, Image} from 'react-native';
import {Input, NativeBaseProvider, Button, Select} from "native-base";
import axios from "axios";
import * as FileSystem from 'expo-file-system';

const backgroundImage = { uri: "https://t4.ftcdn.net/jpg/01/98/24/71/360_F_198247162_JwrVkhqowZb4NJC24156nV6QYRhsV8Qf.jpg" };
global.tempImage = "empty";

const AddAdvertisementScreen = ({navigation}) => {

    const [title, onChangeTextTitle] = React.useState("");
    const [description, onChangeTextDescription] = React.useState("");
    const [price, onChangePrice] = React.useState("");
    const [selectedValue, setSelectedValue] = useState("");

    const [categories, setCategories] = useState([
        {name: 'Odzieź', key: '1'},
        {name: 'Biologia', key: '2'}
    ]);

    const categoryItems = categories.map( (item) => {
        return <Select.Item value={item.name} label={item.name}/>
    })

    useEffect( () => {
        navigation.addListener('focus', () => {
            axios.get(
                'http://80.211.251.152:8080/api/categories'
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
            user: "knaga",
            key: null,
            title: title,
            description: desc,
            price: price,
            category: category,
            base64Image: img
        }
        axios.post('http://80.211.251.152:8080/api/advertisements', advertisementRequestObj)
            .then( response => {
                console.log(response);

                onChangeTextTitle("");
                onChangeTextDescription("");
                onChangePrice("");
            });
    };


    return (
    <NativeBaseProvider>
        <View style={styles.container}>
        <ImageBackground source={backgroundImage} blurRadius={2} resizeMode="cover" style={{flex: 1, justifyContent: "center",}}>
            <Text style={[styles.text,{fontSize:30,fontWeight:'bold',marginBottom:20, marginTop:50, textAlign: 'center' }]}>{"Add new advertisement"}</Text>
            <ScrollView>
            <View style={{backgroundColor:'#444' , margin:5 }}>
            <Text style={styles.text}>{"Describe your item with picture:"}</Text>
            <Image style={(global.tempImage == "empty")?"":styles.advertImage} source ={{uri: global.tempImage}}/>
            <Button style={{marginHorizontal:10, marginBottom:5}} onPress={() => navigation.navigate("CameraScreen")}>
            Take photo
            </Button>
            </View>

            <View style={{backgroundColor:'#444' , margin:5 }}>
            <Text style={styles.text}>Name of your auction:</Text>
            <Input
                style={styles.input}
                value={title}
                onChangeText={onChangeTextTitle}
                placeholder="Title"
            />
            </View>

            <View style={{backgroundColor:'#444' , margin:5 }}>
            <Text style={styles.text}>Describe your product (Optional):</Text>
            <Input
                style={[styles.input,{height:100}]}
                value={description}
                onChangeText={onChangeTextDescription}
                placeholder="Description"
            />
            </View>

            <View style={{backgroundColor:'#444' , margin:5 }}>
            <Text style={styles.text}>How much does it cost?:</Text>
            <Input
                style={styles.input}
                value={price}
                onChangeText={onChangePrice}
                placeholder="Price"
                keyboardType="numeric"
            />
            </View>

            <View style={{backgroundColor:'#444' , margin:5 }}>
            <Text style={styles.text}>In which category should it be?:</Text>
            <Select
                selectedValue={selectedValue}
                style={{ height: 50, width: 150}}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
                {categoryItems}
            </Select>
            </View>

            <Button
                style={{height:70,marginHorizontal:20,marginVertical:10}}
                onPress={async () => {
                const temp = await FileSystem.readAsStringAsync(global.tempImage, { encoding: 'base64' })
                .then((converted_image)=>{createAdvert(title, description, price, selectedValue, converted_image)});
                console.log(temp.length);
                }}
            >
            Create Advertisement
            </Button>

            </ScrollView>
        </ImageBackground>
        </View>
        </NativeBaseProvider>
    );
}

export default AddAdvertisementScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#8ac24a',
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
        advertImage: {
            flex:1,
            aspectRatio: 1.5,
            marginHorizontal:10,
            resizeMode: 'cover'
        },
});