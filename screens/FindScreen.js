import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Image, ImageBackground} from "react-native";
import AdvertisementCard from "../components/AdvertisementCard";
import axios from "axios";
import SearchBar from "../components/SeachBar";

const image = { uri: "https://media-cdn.tripadvisor.com/media/photo-s/0d/87/0c/0c/multi-level-shopping.jpg" };

const FindScreen = ({navigation} ) => {

    const [advertisements, setAdvertisement] = useState([
        {title: 'Samolot', price:'1000 PLN', description: 'Jest bardzo duży!', key: '1', category: 'Elektronika', base64Image: null},
        {title: 'Kanapka', price:'20 PLN', description: 'Jest bardzo dobra!', key: '2', category: 'Motoryzacja', base64Image: null}
    ]);

    const [advertisementsFiltered, setAdvertisementsFiltered] = useState([]);

    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);

    useEffect( () => {
        navigation.addListener('focus', () => {
            axios.get(
                'http://10.0.2.2:8080/api/advertisements'
            ).then( (response) => {
                console.log("Pobrano ogloszenia z GET!");
                setAdvertisement(response.data);
                setAdvertisementsFiltered(response.data);
            }).catch( (error) => {
                console.log("Wykryto blad (ladowanie ogloszen)!");
            });
        })
    }, []);


    useEffect( () => {
        const resultArray = advertisements.filter( advertisement =>
            advertisement.title.indexOf(searchPhrase) > -1 || advertisement.category.indexOf(searchPhrase) > -1);
        setAdvertisementsFiltered(resultArray);
    }, [searchPhrase]);

    useEffect( () => setSearchPhrase(""), [clicked]);

    return (
        <View style={styles.container}>
        <ImageBackground source={image} blurRadius={2} resizeMode="cover" style={{flex: 1, justifyContent: "center",}}>
            <SearchBar
                searchPhrase={searchPhrase}
                setSearchPhrase={setSearchPhrase}
                clicked={clicked}
                setClicked={setClicked}
            />
            <FlatList
                data={advertisementsFiltered}
                renderItem={ ({item}) => (
                    <TouchableOpacity onPress={() => navigation.push('AdvertisementDetails', item)}>
                        <AdvertisementCard>
                            <Image style={styles.advertImage} source={{uri: 'data:image/png;base64,' + item.base64Image}} />
                            <Text style = {{fontSize: 25 , fontWeight: 'bold'}} >{item.title}</Text>
                            <Text>{item.price}zł</Text>
                            <Text>{item.category}</Text>
                        </AdvertisementCard>
                    </TouchableOpacity>
                )}
            />
            </ImageBackground>
        </View>
    );
}

export default FindScreen;

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
        backgroundColor: '#9e8acb',
    }
});