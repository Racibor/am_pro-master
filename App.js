import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      	<Text>Wikus to szef!</Text>
	<Button
        	title="Go to Details"
        	onPress={() => navigation.navigate('Details')}
          />
          <Button
              style={{ margin: 100 }}
              title="Go to Auctions"
              onPress={() => navigation.navigate('Auctions')
              }
          />
      	<StatusBar style="auto" />
    </View>
  );
}

function DetailsScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Details Screen</Text>
        </View>
    );
}

function AuctionListScreen() {

    const [auction, setAuction] = React.useState([]);

    const addAuction = () => {
        setAuction([...auction, "Temp"]);
    }

    const delAuction = () =>{
        let tempAuction = auction;
        tempAuction.pop();
        setAuction([...tempAuction]);
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Auction Screen</Text>
            <Button title="Add test auction" onPress={addAuction} />
            <Button title="Delete last auction" onPress={delAuction} />

            <AuctionComponent title="Tu bedzie tytul" desc="A tutaj bedzie opis" />
            <ScrollView>
            {
                    auction.map((a) => {
                        return (<AuctionComponent title={a} desc = "TempDesc" />) })
            }
            </ScrollView>
        </View>
    );
}

const AuctionComponent = (props) =>{
    return (
        <View style={styles.auction}>
            <TouchableOpacity>
                <Text style={{ fontSize: 15, color: '#555' }}>{"***********************************************"}</Text>
                <Text style={{ fontSize: 15, color: '#fff' }}>{props.title}</Text>
                <Text style={{ fontSize: 10, color: '#fff' }}>{props.desc}</Text>
            </TouchableOpacity>
        </View>
        );
}



const Stack = createNativeStackNavigator();

export default function App() {
  return (
	<NavigationContainer>
      		<Stack.Navigator>
        		<Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Details" component={DetailsScreen} />
              <Stack.Screen name="Auctions" component={AuctionListScreen} />

      		</Stack.Navigator>
    	</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },

    auction: {
        backgroundColor: '#666',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'column',
        alignItems: 'left',
        justifyContent: 'space-between',
        marginTop: 20,
    },
});
