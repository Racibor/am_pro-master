import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, Pressable, Image, FlatList} from "react-native";
import AdvertisementCard from "../components/AdvertisementCard";
import axios from "axios";

const YourAdvertisements = (props) => {

    const navigation = props['navigation'];
    const [advertisements, setAdvertisement] = useState([]);

    useEffect( () => {
        navigation.addListener('focus', () => {
            axios.get(
                'http://80.211.251.152:8080/api/advertisements'
            ).then( (response) => {
                console.log("Pobrano ogloszenia z GET!");
                setAdvertisement(response.data);
            }).catch( (error) => {
                console.log("Wykryto blad (ladowanie ogloszen UPDATE)!");
            });
        })
    }, []);

    return (
        <View style = {styles.container}>
            <FlatList
                data={advertisements}
                renderItem={ ({item}) => (
                    <Pressable onPress={() => navigation.push('Update Advertisement Form', item)}>
                        <AdvertisementCard>
                            <Image style={styles.advertImage} source={{uri: 'data:image/png;base64,' + item.base64Image}} />
                            <Text style = {{fontSize: 25 , fontWeight: 'bold'}} >{item.title}</Text>
                            <Text>{item.price} PLN</Text>
                            <Text>{item.category}</Text>
                        </AdvertisementCard>
                    </Pressable>
                )}
            />
        </View>
    );
}

export default YourAdvertisements;

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