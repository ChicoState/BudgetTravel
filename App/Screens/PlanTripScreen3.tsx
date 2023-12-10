import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

const PlanTripScreen3: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [budget, setBudget] = useState('');
  let responseKeyValuePairs = {};
  const handleNext = async () => {


  const postData =  [
  { lat: '39.7388', long: '-121.8500', term: 'Restaurants' },
  { lat: '39.7388', long: '-121.8500', term: 'Arts & Entertainment' },
  { lat: '39.7388', long: '-121.8500', term: 'Shopping' },
  { lat: '39.7388', long: '-121.8500', term: 'Nightlife' },
  { lat: '39.7388', long: '-121.8500', term: 'Hotels & Travel' },
  { lat: '39.7388', long: '-121.8500', term: 'Beauty & Spas"' },
  { lat: '39.7388', long: '-121.8500', term: 'Arts & Entertainment' },
  { lat: '39.7388', long: '-121.8500', term: 'Arts & Entertainment' },
  { lat: '39.7388', long: '-121.8500', term: 'Arts & Entertainment' },
  { lat: '39.7388', long: '-121.8500', term: 'Arts & Entertainment' }
];

  try {
    for (let i = 0; i < 10; i++) 
    {
      const response = await axios.post
      (
      	apiUrl, 
      	postData[i], // The data to send
      	{
        		headers: {'Content-Type': 'application/json',},
      	}
      
      );

      // { "lat": "39.7388", "long": "-121.8500", "term": "Restaurants" } im assuming the response is in this form
      const responseData = response.data;
      

      responseKeyValuePairs[`Response_${i + 1}`] = {
        lat: responseData.lat,
        long: responseData.long,
        term: responseData.term,
      };
    }

    // To display the response for debugging purposes
    console.log('Response key-value pairs:', responseKeyValuePairs);
  } catch (error) {
    console.error('There was an error with the requests:', error);
  }
    

    
    if (parseInt(budget) > 0) {
      navigation.navigate('TripDisplayMainPage', { budgetAmount: budget });
    }
    
     
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

