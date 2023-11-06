import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
// Import data from other screens
import { location, startDate, endDate } from './PlanTripScreens/PlanTripScreen1';
import { tripBudget, tripDuration } from './PlanTripScreens/PlanTripScreen2';
import { Options, leftOver } from './PlanTripScreens/PlanTripScreen3';

const TripDisplayMainPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trip Details</Text>

      <Text>Location: {location}</Text>
      <Text>Start Date: {startDate}</Text>
      <Text>End Date: {endDate}</Text>
      <Text>Trip Budget: ${tripBudget}</Text>
      <Text>Trip Duration: {tripDuration} days</Text>

      {/* Display the options and remaining budget */
      Object.keys(Options).map((categoryTitle, index) => (
        <View key={index} style={styles.category}>
          <Text style={styles.categoryTitle}>{categoryTitle}</Text>
          <View style={styles.options}>
            {Options[categoryTitle].map((option, optionIndex) => (
              <Text key={optionIndex}>
                {option.option} - ${option.value}
              </Text>
            ))}
          </View>
        </View>
      ))}
      <Text>Remaining Budget: ${leftOver}</Text>

      <Button title="Edit Trip" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  category: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  options: {
    marginLeft: 20,
  },
});

export default TripDisplayMainPage;
