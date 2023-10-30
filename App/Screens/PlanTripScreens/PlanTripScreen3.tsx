import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { tripBudget, tripDuration } from './PlanTripScreen2';
let Options;
let leftOver;
const PlanTripScreen3 = ({ navigation }) => {
  const [remainingBudget, setBudget] = useState(tripBudget);
  
  const categories = [
    {
      title: 'Travel',
      data: [
        { option: 'Fly', value: 500 },
        { option: 'Drive', value: 150 },
        { option: 'Walk', value: 0 },
      ],
    },
    {
      title: 'Stay',
      data: [
        { option: 'AirBnB', value: 300 * tripDuration },
        { option: 'Hotel', value: 200 * tripDuration },
        { option: 'Hostel', value: 25 * tripDuration },
        { option: 'Tent/Friend', value: 0 },
      ],
    },
    {
      title: 'Food',
      data: [
        { option: 'Fine Dining', value: 100 * 3 * tripDuration },
        { option: 'Local Markets', value: 25 * 3 * tripDuration },
        { option: 'Street Food', value: 15 * 3 * tripDuration },
      ],
    },
    {
      title: 'Activities',
      data: [
        { option: 'Music Festival', value: 500 },
        { option: 'Bars/Clubs', value: 200 },
        { option: 'Museum/Aquarium', value: 65 },
        { option: 'Site Seeing', value: 50 },
        { option: 'Hiking', value: 0 },
      ],
    },
  ];

  const [expanded, setExpanded] = useState({});
  const toggleCategory = (title) => {
    setExpanded({ ...expanded, [title]: !expanded[title] });
  };

  // Initialize the "Activities" category with an empty array.
  const [selectedOptions, setSelectedOptions] = useState({
    Activities: [],
  });

  const selectOption = (title, option, value) => {
    if (title === "Activities") {
      const updatedOptions = selectedOptions[title].includes(option)
        ? selectedOptions[title].filter((item) => item !== option)
        : [...selectedOptions[title], option];

      setSelectedOptions({ ...selectedOptions, [title]: updatedOptions });
      if (remainingBudget - value >= 0) {
        setBudget(remainingBudget - value);
      } else {
        alert('Insufficient budget for this option.');
        setBudget(remainingBudget - value);
      }
    } else {
      if (!selectedOptions[title]) {
        setSelectedOptions({ ...selectedOptions, [title]: option });
        if (remainingBudget - value >= 0) {
          setBudget(remainingBudget - value);
        } else {
          alert('Insufficient budget for this option.');
          setBudget(remainingBudget - value);
        }
      } else {
        if (selectedOptions[title] !== option) {
          const selectedCategory = categories.find((category) => category.title === title);
          if (selectedCategory) {
            const previousOption = selectedCategory.data.find((data) => data.option === selectedOptions[title]);
            if (previousOption) {
              const previousOptionValue = previousOption.value;
              setBudget(remainingBudget + previousOptionValue - value);
            } else {
              // Handle the case where the previous option is not found.
              // You can display an error message or handle it as needed.
            }
          } else {
            // Handle the case where the selected category is not found.
            // You can display an error message or handle it as needed.
          }
          setSelectedOptions({ ...selectedOptions, [title]: option });
        }
      }
    }
  };
 
  const navigateToTripDisplayMainPage  = () => {
    Options = selectedOptions;
    leftOver = remainingBudget;
    navigation.navigate('TripDisplayMainPage')
  };

  return (
    <View style={styles.container}>
      <View style={styles.budget}>
        <Text style={styles.budgetText}>Budget: ${remainingBudget}</Text>
      </View>
      <ScrollView>
        {categories.map((category, index) => (
          <View key={index} style={styles.category}>
            <TouchableOpacity onPress={() => toggleCategory(category.title)}>
              <Text style={styles.categoryTitle}>{category.title}</Text>
            </TouchableOpacity>
            {expanded[category.title] && (
              <View style={styles.options}>
                {category.data.map((option, optionIndex) => (
                  <TouchableOpacity
                    key={optionIndex}
                    onPress={() => selectOption(category.title, option.option, option.value)}
                    style={[
                      styles.option,
                      category.title === "Activities" && selectedOptions.Activities.includes(option.option) && styles.selectedOption,
                      category.title !== "Activities" && selectedOptions[category.title] === option.option && styles.selectedOption,
                    ]}
                    disabled={selectedOptions[category.title] === option.option}
                  >
                    <Text>{option.option} - ${option.value}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  budget: {
    padding: 20,
    backgroundColor: 'lightgray',
  },
  budgetText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  category: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  options: {
    marginLeft: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: 'lightgray',
  },
});
export {Options, leftOver};
export default PlanTripScreen3;
