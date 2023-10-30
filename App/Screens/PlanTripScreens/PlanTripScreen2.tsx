import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { location, startDate, endDate } from './PlanTripScreen1';
let tripBudget;
let tripDuration;
const PlanTripScreen2 = ({ navigation }) => {
  const [budget, setBudget] = useState('');

  const handleBudgetInput = (text) => {
    const numericValue = text.replace(/\D/g, '');
    const formattedBudget = `${numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
    tripBudget = parseFloat(text.replace(/[^0-9.]/g, ''));
  
    // Set the numerical value into tripBudget
    setBudget(formattedBudget);
  };

  const handleConfirm = () => {
    navigation.navigate('PlanTripScreen3');
  };
  const calculateTripDuration = (start, end) => {
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);
    const timeDifference = endDateObj - startDateObj;
    const days = Math.ceil(timeDifference / (1000 * 3600 * 24));
    tripDuration = days;
    return days;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Plan Your Trip</Text>
      <View style={styles.infoBox}>
        <Text style={styles.info}>Location: {location}</Text>
        <Text style={styles.info}>Duration: {calculateTripDuration(startDate, endDate)} days</Text>
        <Text style={styles.text}>Enter your budget for the trip:</Text>
        <TextInput
          style={styles.input}
          placeholder="Budget (in dollars)"
          keyboardType="numeric" // Ensures only numeric keyboard
          onChangeText={handleBudgetInput}
          value={budget}
        />
        <Button
          title="Confirm"
          onPress={handleConfirm}
          disabled={!budget}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
    padding: 20,
    marginTop: 50,
    marginBottom: 60,
  },
  infoBox: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 20,
    borderRadius: 10, // Rounded corners
    elevation: 5, // Box shadow
  },
  info: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    padding: 10,
  },
  input: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
  },
});
export {tripBudget, tripDuration};
export default PlanTripScreen2;
