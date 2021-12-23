import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import AdvertisementCard from "../components/advertisementCard";


const FindScreen = ( {navigation} ) => {

    const [advertisements, setAdvertisement] = useState([
        {title: 'Samolot', price:'1000 PLN', description: 'Jest bardzo duży!', key: '1'},
        {title: 'Kanapka', price:'20 PLN', description: 'Jest bardzo dobra!', key: '2'}
    ]);


    return (
        <View style={styles.container}>
            <FlatList
                data={advertisements}
                renderItem={ ({item}) => (
                     <TouchableOpacity>
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

export default FindScreen;

const styles = StyleSheet.create({
   container: {
       flex: 1,
       alignItems: 'center',
       justifyContent: 'center',
       backgroundColor: '#9e8acb',
   }
});