import React, {useEffect, useState} from 'react';
import {Pressable,View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Image, ImageBackground} from "react-native";
import AdvertisementCard from "../components/AdvertisementCard";
import axios from "axios";
import SearchBar from "../components/SeachBar";

const image = { uri: "https://cdn.pixabay.com/photo/2017/08/06/05/32/people-2589116_960_720.jpg" };

const FindScreen = (prop ) => {
    const props = prop.props
    const navigation = props['navigation'];
    const route = props['route'];
    const [advertisements, setAdvertisement] = useState([
    ]);

    const [advertisementsFiltered, setAdvertisementsFiltered] = useState([]);

    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);

    useEffect( () => {
        navigation.addListener('focus', () => {
            axios.get(
                'http://80.211.251.152:8080/api/advertisements/category?name=' + prop['category']
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
            advertisement.title.toLowerCase().indexOf(searchPhrase.toLowerCase()) > -1);
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
                    <Pressable onPress={() => navigation.push('AdvertisementDetails', item)}>
                        <AdvertisementCard>
                            <Image style={styles.advertImage} source={{uri: 'data:image/png;base64,' + item.base64Image}} />
                            <Text style = {{fontSize: 25 , fontWeight: 'bold'}} >{item.title}</Text>
                            <Text>{item.price} PLN</Text>
                            <Text>{item.category}</Text>
                        </AdvertisementCard>
                    </Pressable>
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
        backgroundColor: '#121212',
    }
});