import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Button} from "react-native";
import AdvertisementCard from "../components/advertisementCard";
import axios from "axios";

const FindScreenMainPage = ( {navigation} ) => {

    const [advertisements, setAdvertisement] = useState([
        {title: 'Samolot', price:'1000 PLN', description: 'Jest bardzo duży!', key: '1'},
        {title: 'Kanapka', price:'20 PLN', description: 'Jest bardzo dobra!', key: '2'}
    ]);

    useEffect( () => {
        axios.get(
            'http://10.0.2.2:8080/api/advertisement'
        ).then( (response) => {
            console.log("Pobrano dane!");
            setAdvertisement(response.data);
        }).catch( (error) => {
            console.log("Wykryto blad!");
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={advertisements}
                renderItem={ ({item}) => (
                    <TouchableOpacity onPress={() => navigation.push('AdvertisementDetails', item)}>
                        <AdvertisementCard>
                            <Text>{item.title}</Text>
                            <Text>{item.price}</Text>
                        </AdvertisementCard>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

export default FindScreenMainPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#9e8acb',
    }
});