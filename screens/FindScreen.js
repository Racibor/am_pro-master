import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button, Image} from "react-native";
import AdvertisementCard from "../components/advertisementCard";
import axios from "axios";

const FindScreen = ({navigation} ) => {

    const [advertisements, setAdvertisement] = useState([
        {title: 'Samolot', price:'1000 PLN', description: 'Jest bardzo duży!', key: '1', base64Image: null},
        {title: 'Kanapka', price:'20 PLN', description: 'Jest bardzo dobra!', key: '2', base64Image: null}
    ]);

    useEffect( () => {
        navigation.addListener('focus', () => {
            axios.get(
                'http://10.0.2.2:8080/api/advertisements'
            ).then( (response) => {
                console.log("Pobrano dane z GET!");
                setAdvertisement(response.data);
            }).catch( (error) => {
                console.log("Wykryto blad!");
            });
        })
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={advertisements}
                renderItem={ ({item}) => (
                    <TouchableOpacity onPress={() => navigation.push('AdvertisementDetails', item)}>
                        <AdvertisementCard>
                            <Image style={{width: 50, height: 50}} source={{uri: 'data:image/png;base64,' + item.base64Image}} />
                            <Text>{item.title}</Text>
                            <Text>{item.price}</Text>
                        </AdvertisementCard>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default FindScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9e8acb',
    }
});