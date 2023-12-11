import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import {desti} from './HomeScreen'



const SanDiegoLocations = [
  { id: 1, title: 'Yosemite National Park', coordinates: { latitude: 37.8651, longitude: -119.5383 }, cost: 50 },
  { id: 2, title: 'Golden Gate Bridge', coordinates: { latitude: 37.8199, longitude: -122.4783 }, cost: 30 },
  { id: 3, title: 'Disneyland Resort', coordinates: { latitude: 33.8121, longitude: -117.9190 }, cost: 70 },
  { id: 4, title: 'Universal Studios Hollywood', coordinates: { latitude: 34.1381, longitude: -118.3534 }, cost: 60 },
  { id: 5, title: 'Lake Tahoe', coordinates: { latitude: 39.0968, longitude: -120.0324 }, cost: 40 },
  { id: 6, title: 'Death Valley National Park', coordinates: { latitude: 36.5054, longitude: -117.0794 }, cost: 25 },
  { id: 7, title: 'Napa Valley', coordinates: { latitude: 38.5025, longitude: -122.2654 }, cost: 55 },
  { id: 8, title: 'Hollywood Walk of Fame', coordinates: { latitude: 34.1014, longitude: -118.3416 }, cost: 35 },
  { id: 9, title: 'Big Sur', coordinates: { latitude: 36.2704, longitude: -121.8083 }, cost: 45 },
  { id: 10, title: 'Alcatraz Island', coordinates: { latitude: 37.8267, longitude: -122.4233 }, cost: 40 },
  { id: 11, title: 'Sequoia National Park', coordinates: { latitude: 36.4864, longitude: -118.5658 }, cost: 50 },
  { id: 12, title: 'San Diego Zoo', coordinates: { latitude: 32.7353, longitude: -117.1490 }, cost: 30 },
  { id: 13, title: 'Santa Monica Pier', coordinates: { latitude: 34.0092, longitude: -118.4961 }, cost: 35 },
  { id: 14, title: 'Joshua Tree National Park', coordinates: { latitude: 33.8734, longitude: -115.9010 }, cost: 25 },
  { id: 15, title: 'Pacific Coast Highway (Highway 1)', coordinates: { latitude: 36.7783, longitude: -119.4179 }, cost: 45 },
  { id: 16, title: 'Griffith Observatory', coordinates: { latitude: 34.1184, longitude: -118.3004 }, cost: 20 },
  { id: 17, title: 'La Jolla Cove', coordinates: { latitude: 32.8503, longitude: -117.2728 }, cost: 40 },
  { id: 18, title: 'California Academy of Sciences', coordinates: { latitude: 37.7694, longitude: -122.4660 }, cost: 30 },
  { id: 19, title: 'Redwood National and State Parks', coordinates: { latitude: 41.2132, longitude: -124.0046 }, cost: 50 },
  { id: 20, title: 'Venice Beach', coordinates: { latitude: 33.9850, longitude: -118.4695 }, cost: 35 },
];


const tijuanaLocations = [
  { id: 1, title: 'Zona Centro', coordinates: { latitude: 32.5295, longitude: -117.0265 }, cost: 30 },
  { id: 2, title: 'Avenida Revolución', coordinates: { latitude: 32.5347, longitude: -117.0331 }, cost: 25 },
  { id: 3, title: 'Playas de Tijuana', coordinates: { latitude: 32.5169, longitude: -117.1269 }, cost: 40 },
  { id: 4, title: 'El Trompo Interactive Museum Tijuana', coordinates: { latitude: 32.5143, longitude: -116.9848 }, cost: 20 },
  { id: 5, title: 'Cultural Center of Tijuana (CECUT)', coordinates: { latitude: 32.5255, longitude: -117.0369 }, cost: 35 },
  { id: 6, title: 'Mercado Hidalgo', coordinates: { latitude: 32.5262, longitude: -117.0260 }, cost: 30 },
  { id: 7, title: 'Tijuana Brewery', coordinates: { latitude: 32.5223, longitude: -117.0168 }, cost: 25 },
  { id: 8, title: 'Plaza Rio Tijuana', coordinates: { latitude: 32.5141, longitude: -117.0200 }, cost: 40 },
  { id: 9, title: 'Parque Morelos', coordinates: { latitude: 32.5181, longitude: -117.0426 }, cost: 20 },
  { id: 10, title: 'Estadio Caliente', coordinates: { latitude: 32.4994, longitude: -116.9481 }, cost: 30 },
  { id: 11, title: 'Calle Sexta', coordinates: { latitude: 32.5311, longitude: -117.0349 }, cost: 25 },
  { id: 12, title: 'Tijuana Wax Museum', coordinates: { latitude: 32.5286, longitude: -117.0352 }, cost: 20 },
  { id: 13, title: 'El Foro', coordinates: { latitude: 32.5291, longitude: -117.0393 }, cost: 35 },
  { id: 14, title: 'Agua Caliente Racetrack', coordinates: { latitude: 32.5272, longitude: -117.0180 }, cost: 40 },
  { id: 15, title: 'Parque de la Amistad', coordinates: { latitude: 32.5202, longitude: -117.0286 }, cost: 30 },
  { id: 16, title: 'Museo El Trompo', coordinates: { latitude: 32.5108, longitude: -116.9778 }, cost: 25 },
  { id: 17, title: 'La Caja', coordinates: { latitude: 32.5292, longitude: -117.0453 }, cost: 20 },
  { id: 18, title: 'Tijuana Cultural Center (Cecut)', coordinates: { latitude: 32.5294, longitude: -117.0381 }, cost: 35 },
  { id: 19, title: 'La Bodega de Papel', coordinates: { latitude: 32.5237, longitude: -117.0455 }, cost: 30 },
  { id: 20, title: 'Plaza Monumental de Tijuana', coordinates: { latitude: 32.5197, longitude: -117.0267 }, cost: 40 },
];


const costaRicaLocations = [
  { id: 1, title: 'Arenal Volcano', coordinates: { latitude: 10.4628, longitude: -84.7057 }, cost: 40 },
  { id: 2, title: 'Monteverde Cloud Forest Reserve', coordinates: { latitude: 10.3000, longitude: -84.8167 }, cost: 35 },
  { id: 3, title: 'Manuel Antonio National Park', coordinates: { latitude: 9.3923, longitude: -84.1369 }, cost: 30 },
  { id: 4, title: 'Tortuguero National Park', coordinates: { latitude: 10.5629, longitude: -83.5070 }, cost: 45 },
  { id: 5, title: 'Corcovado National Park', coordinates: { latitude: 8.5333, longitude: -83.5833 }, cost: 50 },
  { id: 6, title: 'La Fortuna Waterfall', coordinates: { latitude: 10.4625, longitude: -84.7051 }, cost: 25 },
  { id: 7, title: 'Puerto Viejo', coordinates: { latitude: 9.6485, longitude: -82.7535 }, cost: 30 },
  { id: 8, title: 'Rincón de la Vieja Volcano National Park', coordinates: { latitude: 10.7833, longitude: -85.3167 }, cost: 35 },
  { id: 9, title: 'San José', coordinates: { latitude: 9.9281, longitude: -84.0907 }, cost: 20 },
  { id: 10, title: 'Tenorio Volcano National Park', coordinates: { latitude: 10.6167, longitude: -85.0000 }, cost: 30 },
  { id: 11, title: 'Irazú Volcano National Park', coordinates: { latitude: 9.9789, longitude: -83.8527 }, cost: 25 },
  { id: 12, title: 'Jaco', coordinates: { latitude: 9.6167, longitude: -84.6333 }, cost: 25 },
  { id: 13, title: 'Guanacaste Province', coordinates: { latitude: 10.6347, longitude: -85.4406 }, cost: 40 },
  { id: 14, title: 'Tamarindo', coordinates: { latitude: 10.2998, longitude: -85.8408 }, cost: 30 },
  { id: 15, title: 'Santa Teresa', coordinates: { latitude: 9.6387, longitude: -85.1701 }, cost: 35 },
  { id: 16, title: 'La Paz Waterfall Gardens', coordinates: { latitude: 10.1779, longitude: -84.1275 }, cost: 25 },
  { id: 17, title: 'Cahuita National Park', coordinates: { latitude: 9.7371, longitude: -82.8453 }, cost: 30 },
  { id: 18, title: 'Punta Uva', coordinates: { latitude: 9.6227, longitude: -82.7010 }, cost: 35 },
  { id: 19, title: 'Barra Honda National Park', coordinates: { latitude: 10.0325, longitude: -85.3436 }, cost: 30 },
  { id: 20, title: 'Río Celeste', coordinates: { latitude: 10.8504, longitude: -85.3520 }, cost: 40 },
];

const tokyoLocations = [
  { id: 1, title: 'Senso-ji Temple', coordinates: { latitude: 35.7146, longitude: 139.7967 }, cost: 25 },
  { id: 2, title: 'Shibuya Crossing', coordinates: { latitude: 35.6590, longitude: 139.7006 }, cost: 30 },
  { id: 3, title: 'Tokyo Disneyland', coordinates: { latitude: 35.6329, longitude: 139.8807 }, cost: 50 },
  { id: 4, title: 'Tsukiji Market', coordinates: { latitude: 35.6654, longitude: 139.7707 }, cost: 25 },
  { id: 5, title: 'Tokyo Tower', coordinates: { latitude: 35.6586, longitude: 139.7454 }, cost: 40 },
  { id: 6, title: 'Meiji Shrine', coordinates: { latitude: 35.6764, longitude: 139.6993 }, cost: 25 },
  { id: 7, title: 'Ueno Park', coordinates: { latitude: 35.7149, longitude: 139.7745 }, cost: 30 },
  { id: 8, title: 'Akihabara', coordinates: { latitude: 35.7022, longitude: 139.7740 }, cost: 30 },
  { id: 9, title: 'Roppongi Hills', coordinates: { latitude: 35.6604, longitude: 139.7293 }, cost: 35 },
  { id: 10, title: 'Odaiba', coordinates: { latitude: 35.6190, longitude: 139.7798 }, cost: 30 },
  { id: 11, title: 'Tokyo Imperial Palace', coordinates: { latitude: 35.6852, longitude: 139.7528 }, cost: 25 },
  { id: 12, title: 'Ginza District', coordinates: { latitude: 35.6712, longitude: 139.7649 }, cost: 35 },
  { id: 13, title: 'Asakusa District', coordinates: { latitude: 35.7144, longitude: 139.7960 }, cost: 30 },
  { id: 14, title: 'Shinjuku Gyoen National Garden', coordinates: { latitude: 35.6852, longitude: 139.7103 }, cost: 25 },
  { id: 15, title: 'Yoyogi Park', coordinates: { latitude: 35.6721, longitude: 139.6922 }, cost: 30 },
  { id: 16, title: 'Harajuku District', coordinates: { latitude: 35.6717, longitude: 139.7035 }, cost: 30 },
  { id: 17, title: 'Tokyo Skytree', coordinates: { latitude: 35.7101, longitude: 139.8107 }, cost: 40 },
  { id: 18, title: 'National Museum of Emerging Science and Innovation', coordinates: { latitude: 35.6199, longitude: 139.7768 }, cost: 25 },
  { id: 19, title: 'Edo-Tokyo Museum', coordinates: { latitude: 35.6962, longitude: 139.7972 }, cost: 25 },
  { id: 20, title: 'Kabukicho District', coordinates: { latitude: 35.6943, longitude: 139.7029 }, cost: 30 },
];



export const responseKeyValuePairs = [];
export let cost1 = 0;
let plac1
export let start = {
  latitude: 0,
  longitude: 0,
  latitudeDelta: 0,
  longitudeDelta: 0,
};


export const updateStart = (latitude, longitude, latitudeDelta, longitudeDelta) => {
  start = {
    latitude,
    longitude,
    latitudeDelta,
    longitudeDelta,
  };
};

const PlanTripScreen3: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [budget, setBudget] = useState('');
  
  const handleNext = () => 
  {
          cost1 = parseInt(budget, 10);
          responseKeyValuePairs.splice(0, responseKeyValuePairs.length);
          if(desti == 'Costa Rica')
          {
          	updateStart(9.9281, -84.0907, 5, 5);
          	let temp = cost1;
          	for(let i = 0; i < 20; i++)
          	{
          		if(cost1 - costaRicaLocations[i].cost >= 0)
          		{
          			cost1 = cost1 - costaRicaLocations[i].cost;
          			responseKeyValuePairs.push(costaRicaLocations[i]);
          		}
          	}
          	
          	cost1 = temp - cost1;
          
	}
	else if(desti == 'Tijuana, Mexico')
	{
		updateStart(32.7349, -117.1449, 5, 5);
		let temp = cost1;
		for(let i = 0; i < 20; i++)
          	{
          		if(cost1 - tijuanaLocations[i].cost >= 0)
          		{
          			cost1 = cost1 - tijuanaLocations[i].cost;
          			responseKeyValuePairs.push(tijuanaLocations[i]);
          		}
          	}
          	cost1 = temp - cost1;
	}
	else if(desti == 'Tokyo, Japan')
	{
		updateStart(35.6895, 139.6917, 5, 5);
		let temp = cost1;
		for(let i = 0; i < 20; i++)
          	{
          		if(cost1 - tokyoLocations[i].cost >= 0)
          		{
          			cost1 = cost1 - tokyoLocations[i].cost;
          			responseKeyValuePairs.push(tokyoLocations[i]);
          		}
          	}
          	cost1 = temp - cost1;
	}
	else
	{
	          updateStart(32.7349, -117.1449, 5, 5);
		let temp = cost1;
		for(let i = 0; i < 20; i++)
          	{
          		if(cost1 - SanDiegoLocations[i].cost >= 0)
          		{
          			cost1 = cost1 - SanDiegoLocations[i].cost;
          			responseKeyValuePairs.push(SanDiegoLocations[i]);
          		}
          	}
          	cost1 = temp - cost1;
	}
	


  

    

      navigation.navigate('TripDisplayMainPage', { budgetAmount: budget });
    
    
     
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan Your Trip</Text>
      <Text style={styles.text}>Budget:</Text>
      <View style={styles.divider} />
      <View style={styles.row}>
        <View style={styles.box}>
          <TextInput
            style={styles.input}
            placeholder="Amount"
            placeholderTextColor="black"
            value={budget}
            onChangeText={(text) => setBudget(text)}
            keyboardType="numeric"
          />
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={handleNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: 'black',
    marginTop: 50,
    marginBottom: 60,
  },
  text: {
    fontSize: 25,
    color: 'black',
  },
  input: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
  },
  divider: {
    marginVertical: 20,
  },
  box: {
    width: 200,
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 200,
  },
});

export default PlanTripScreen3;

