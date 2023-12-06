import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PlanTripScreen3: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [budget, setBudget] = useState('');
  
  const handleNext = () => {
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

