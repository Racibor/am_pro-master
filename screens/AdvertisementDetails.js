import {StyleSheet} from "react-native";
import {StatusBar,View, Text, Image, ScrollView,SafeAreaView} from 'react-native';
import React from 'react';

export default function AdvertisementDetails({route}){
    let data = route.params;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView >
                <Image style={styles.advertImage} source={{uri: 'data:image/png;base64,' + data.base64Image}} />
                <View style={{marginLeft:10}}>
                <Text style={styles.textTitle}>{ data.title }</Text>
                <Text style={{fontWeight:'bold',fontSize:20}}>{ data.price }zł</Text>
                <Text style={{fontWeight:'bold', marginTop:5}}>Opis</Text>
                <Text>{ data.description }</Text>
                </View>
            </ScrollView>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    advertImage: {
        flex:1,
        aspectRatio: 1.5,
        resizeMode: 'cover',
        marginLeft: 0
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    textTitle: {
        fontSize: 30,
        backgroundColor: '#ddd',
        marginBottom: 10
    }
});