import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
// Import data from other screens
import { location, startDate, endDate } from './PlanTripScreens/PlanTripScreen1';
import { tripBudget, tripDuration } from './PlanTripScreens/PlanTripScreen2';
import { Options, leftOver } from './PlanTripScreens/PlanTripScreen3';

const formatDate = (date) => {
  const options = { month: 'short', day: 'numeric', year: 'numeric' };
  return new Date(date).toLocaleDateString(undefined, options);
};


const TripDisplayMainPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Trip Details</Text>

      <Text  style={styles.info}>Location: {location}</Text>
      <Text style={styles.info}>Trip Duration: {tripDuration} days</Text>
      <Text style={styles.info}>Travel Dates: {formatDate(startDate)} - {formatDate(endDate)}</Text>
      <Text style={styles.info}>Trip Budget: ${tripBudget}</Text>
      <Text style={styles.info}>Remaining Budget: ${leftOver}</Text>

      {/* Display the options and remaining budget */
      Object.keys(Options).map((categoryTitle, index) => (
        <View key={index} style={styles.category}>
          <Text style={styles.categoryTitle}>{categoryTitle}</Text>
          <View style={styles.options}>
            {Options[categoryTitle].map((option, optionIndex) => (
              <Text key={optionIndex} style={styles.categoryText}>
                {option.option} - ${option.value}
              </Text>
            ))}
          </View>
        </View>
      ))}

      <Button title="Edit Trip" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 20,

  },
  category: {
    marginBottom: 20,
  },
  categoryTitle: {
    textAlign: 'center', // Center the category text
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 10,
    elevation: 5, // Box shadow
  },
  options: {
    marginLeft: 20,
  },
  categoryText: {
    padding: 8,
  },
});

export default TripDisplayMainPage;
