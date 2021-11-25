import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
	<NavigationContainer>
      		<Stack.Navigator>
        		<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="Details" component={DetailsScreen} />
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
});
