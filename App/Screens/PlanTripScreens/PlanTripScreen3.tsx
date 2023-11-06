import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { tripBudget, tripDuration } from './PlanTripScreen2';
let originalBudget = tripBudget;
let Options;
let leftOver;
const PlanTripScreen3 = ({ navigation }) => {
  const [remainingBudget, setBudget] = useState(tripBudget);
  
  const categories = [
    {
      title: 'Transportation',
      data: [
        { option: 'Taxi/Rideshare', value: 70 * tripDuration },
        { option: 'Subway/Metro', value: 60 * tripDuration },
        { option: 'Bus', value: 50 * tripDuration },
        { option: 'Tram/Light Rail', value: 50 * tripDuration },
        { option: 'Walking/Do not include', value: 0 * tripDuration },
        { option: 'Car Rental', value: 80 * tripDuration },
        { option: 'Bicycle Rental', value: 40 * tripDuration },
        { option: 'Train', value: 75 * tripDuration },
        { option: 'Ferry/Boat', value: 70 * tripDuration },
        { option: 'Walking/Do not include', value: 0 },
      ].sort((a, b) => b.value - a.value),
    },
    {
      title: 'Stay',
      data: [
        { option: 'Luxury Mountain Resort', value: 380 * tripDuration },
        { option: 'Luxury Resort & Spa', value: 350 * tripDuration },
        { option: 'Beachfront Villa Suites', value: 280 * tripDuration },
        { option: 'Boutique Hotel & Spa', value: 280 * tripDuration },
        { option: 'Mountain View Chalet', value: 210 * tripDuration },
        { option: 'Charming Treehouse Getaway', value: 200 * tripDuration },
        { option: 'Modern City Hotel', value: 240 * tripDuration },
        { option: 'Family Vacation Rental Home', value: 230 * tripDuration },
        { option: 'Seaside Beach House', value: 260 * tripDuration },
        { option: 'Historic Inn & Restaurant', value: 190 * tripDuration },
        { option: 'Eco-Friendly Retreat Lodge', value: 180 * tripDuration },
        { option: 'Eco-Friendly Wilderness Retreat', value: 180 * tripDuration },
        { option: 'Rustic Lakeside Lodge', value: 170 * tripDuration },
        { option: 'Local Bed & Breakfast Inn', value: 175 * tripDuration },
        { option: 'Cozy Cabin in the Woods', value: 160 * tripDuration },
        { option: 'Rural Farm Stay Cottage', value: 130 * tripDuration },
        { option: 'Riverside Campground', value: 100 * tripDuration },
        { option: 'Quaint Motel', value: 90 * tripDuration },
        { option: 'Countryside Bed & Breakfast', value: 150 * tripDuration },
        { option: 'Urban Boutique Hotel', value: 220 * tripDuration },
        { option: 'Budget-Friendly Hostel', value: 70 * tripDuration },
        { option: 'Rural Camping Experience', value: 60 * tripDuration },
        { option: 'Grand Hotel & Spa', value: 300 * tripDuration },
        { option: 'Seaside Villas', value: 250 * tripDuration },
    ].sort((a, b) => b.value - a.value),
    },
    {
      title: 'Food',
      data: [
        { option: 'Elegant Eats', value: 150 },
        { option: 'Steakhouse Supreme', value: 120 },
        { option: 'Taste of Excellence', value: 120 },
        { option: 'Savory Spices Bistro', value: 110 },
        { option: 'Culinary Creations', value: 110 },
        { option: 'Gourmet Grill', value: 100 },
        { option: 'Pasta Paradise', value: 90 },
        { option: 'Italian Eleganza', value: 85 },
        { option: 'Harbor View Seafood', value: 85 },
        { option: 'Farm-to-Table Delights', value: 90 },
        { option: 'Tropical Tastes Oasis', value: 80 },
        { option: 'Seafood Sensations', value: 80 },
        { option: 'Global Palate', value: 70 },
        { option: 'Asian Fusion Delight', value: 70 },
        { option: 'Sizzling Szechuan', value: 75 },
        { option: 'Mediterranean Magic', value: 75 },
        { option: 'Feast Buffet', value: 65 },
        { option: 'Pub Grub & Pints', value: 65 },
        { option: 'Green Garden Cafe', value: 60 },
        { option: 'Cozy Corner Cafe', value: 60 },
        { option: 'BBQ Bliss', value: 50 },
        { option: 'Craft Brew Haven', value: 50 },
        { option: 'Sushi Serenity', value: 55 },
        { option: 'Mouthwatering Morsels', value: 55 },
        { option: 'Cafe Du Jour', value: 40 },
        { option: 'Sweet Tooth Delights', value: 40 },
        { option: 'Italian Eleganza', value: 85 },
        { option: 'Farm-to-Table Delights', value: 90 },
        { option: 'Tropical Tastes Oasis', value: 80 },
        { option: 'Savory Spices Bistro', value: 110 },
        { option: 'Culinary Creations', value: 110 },
        { option: 'Cozy Corner Cafe', value: 60 },
        { option: 'Pasta Paradise', value: 90 },
        { option: 'Harbor View Seafood', value: 85 },
        { option: 'Flavorful Pho House', value: 70 },
        { option: 'Asian Fusion Delight', value: 70 },
        { option: 'Sizzling Szechuan', value: 75 },
        { option: 'Sweets & Treats Haven', value: 45 },
        { option: 'Gourmet Food Truck', value: 40 },
        { option: 'Local Flavors Market', value: 30 },
        { option: 'Food Truck Fiesta', value: 30 },
        { option: 'Local Bites Market', value: 25 },
        { option: 'Street Food Haven', value: 15 },
      ].sort((a, b) => b.value - a.value),
    },
    {
      title: 'Activities',
      data: [
        { option: 'Museum of Modern Art', value: 90 },
        { option: 'National Aquarium', value: 85 },
        { option: 'Historic Landmark Tour', value: 80 },
        { option: 'Zoo Adventure', value: 75 },
        { option: 'Botanical Garden Stroll', value: 70 },
        { option: 'Outdoor Adventure Park', value: 80 },
        { option: 'Cultural Heritage Experience', value: 75 },
        { option: 'Beach Relaxation', value: 65 },
        { option: 'Theme Park Thrills', value: 90 },
        { option: 'Winery & Vineyard Tour', value: 85 },
        { option: 'Local Art Gallery Visit', value: 70 },
        { option: 'Science Center Exploration', value: 75 },
        { option: 'Historical Site Discovery', value: 80 },
        { option: 'Wildlife Safari', value: 75 },
        { option: 'Botanical Garden Stroll', value: 70 },
        { option: 'Cruise & Waterfront Dining', value: 90 },
        { option: 'Hiking and Nature Trails', value: 80 },
        { option: 'Live Music & Theater Show', value: 75 },
        { option: 'Spa & Wellness Retreat', value: 65 },
        { option: 'Scenic Riverboat Cruise', value: 75 },
        { option: 'Historical Landmark Tour', value: 80 },
        { option: 'Local Artisan Market', value: 70 },
        { option: 'Biking & Cycling Adventure', value: 75 },
        { option: 'Adventure Water Park', value: 80 },
        { option: 'Aquarium Exploration', value: 85 },
        { option: 'Local Music & Arts Scene', value: 70 },
        { option: 'Horseback Riding Experience', value: 75 },
      ].sort((a, b) => b.value - a.value),
    },
  ];

  const [expanded, setExpanded] = useState({});
  const toggleCategory = (title) => {
    setExpanded({ ...expanded, [title]: !expanded[title] });
  };

  const [selectedOptions, setSelectedOptions] = useState({
    Transportation: [],
    Stay: [],
    Food: [],
    Activities: [],
  });

  const selectOption = (title, option, value) => {
    const isOptionSelected = selectedOptions[title].includes(option);
    const isBudgetSufficient = remainingBudget - value >= 0;

    if (title === "Activities") {
      if (isOptionSelected) {
        // The option is currently selected, and the budget is sufficient, so deselect it.
        const updatedOptions = selectedOptions[title].filter((item) => item !== option);
        setSelectedOptions({ ...selectedOptions, [title]: updatedOptions });
        setBudget(remainingBudget + value);
      } else if (!isOptionSelected) {
          if (!isBudgetSufficient ) {
            // Budget is insufficient, so prevent the selection and display an alert.
            alert('Insufficient budget for this option.');
            return;
          }
          // The option is not selected, and the budget is sufficient, so select it.
          const updatedOptions = [...selectedOptions[title], option];
          setSelectedOptions({ ...selectedOptions, [title]: updatedOptions });
          setBudget(remainingBudget - value);
      }
    }
    else if (title === "Food"){
      if (isOptionSelected) {
        // The option is currently selected, and the budget is sufficient, so deselect it.
        const updatedOptions = selectedOptions[title].filter((item) => item !== option);
        setSelectedOptions({ ...selectedOptions, [title]: updatedOptions });
        setBudget(remainingBudget + value);
      } else if (!isOptionSelected) {
          if (!isBudgetSufficient ) {
            // Budget is insufficient, so prevent the selection and display an alert.
            alert('Insufficient budget for this option.');
            return;
          }
          // The option is not selected, and the budget is sufficient, so select it.
          const updatedOptions = [...selectedOptions[title], option];
          setSelectedOptions({ ...selectedOptions, [title]: updatedOptions });
          setBudget(remainingBudget - value);
      }
    }
    else if (title === "Transportation") {
      if (isOptionSelected) {
        // The option is currently selected, so deselect it.
        const updatedOptions = selectedOptions[title].filter((item) => item !== option);
        setSelectedOptions({ ...selectedOptions, [title]: updatedOptions });
        setBudget(remainingBudget + value);
        return;
      } else {
          const previousOption = selectedOptions[title][0]; // Assuming only one option can be selected.
          if (previousOption) {
            const previousOptionData = categories.find((category) => category.title === title)?.data.find((item) => item.option === previousOption);
            if (previousOptionData) {
              const previousOptionValue = previousOptionData.value;
              if (remainingBudget + previousOptionValue - value < 0){
                alert('Insufficient budget for this option.');
                return;
              }
              const updatedOptions = [option];
              setSelectedOptions((prevSelectedOptions) => ({...prevSelectedOptions,[title]: updatedOptions,}));
              setBudget(remainingBudget + previousOptionValue - value);
            }
          }
          else{
            if (!isBudgetSufficient) {
              // Budget is insufficient, so prevent the selection and display an alert.
              alert('Insufficient budget for this option.');
              return;
            } 
            // Now, select the new option.
            const updatedOptions = [option];
            setSelectedOptions({ ...selectedOptions, [title]: updatedOptions });
            setBudget(remainingBudget - value);
            }
        }
      }
    
    else if (title === "Stay"){
      if (isOptionSelected) {
        // The option is currently selected, so deselect it.
        const updatedOptions = selectedOptions[title].filter((item) => item !== option);
        setSelectedOptions({ ...selectedOptions, [title]: updatedOptions });
        setBudget(remainingBudget + value);
        return;
      } else {
          const previousOption = selectedOptions[title][0]; // Assuming only one option can be selected.
          if (previousOption) {
            const previousOptionData = categories.find((category) => category.title === title)?.data.find((item) => item.option === previousOption);
            if (previousOptionData) {
              const previousOptionValue = previousOptionData.value;
              if (remainingBudget + previousOptionValue - value < 0){
                alert('Insufficient budget for this option.');
                return;
              }
              
              const updatedOptions = [option];
              setSelectedOptions((prevSelectedOptions) => ({...prevSelectedOptions,[title]: updatedOptions,}));
              setBudget(remainingBudget + previousOptionValue - value);
            }
          }
          else{
            if (!isBudgetSufficient) {
              // Budget is insufficient, so prevent the selection and display an alert.
              alert('Insufficient budget for this option.');
              return;
            } 
            const updatedOptions = [option];
            setSelectedOptions({ ...selectedOptions, [title]: updatedOptions });
            setBudget(remainingBudget - value);
            }
        }
    }
  };

  
  const selectedOptionsObj = {
    Transportation: selectedOptions.Transportation.map((option) => {
      // Retrieve the value for each selected option from the categories data
      const optionData = categories[0].data.find((item) => item.option === option);
      return optionData ? { option, value: optionData.value } : null;
    }),
    Stay: selectedOptions.Stay.map((option) => {
      const optionData = categories[1].data.find((item) => item.option === option);
      return optionData ? { option, value: optionData.value } : null;
    }),
    Food: selectedOptions.Food.map((option) => {
      const optionData = categories[2].data.find((item) => item.option === option);
      return optionData ? { option, value: optionData.value } : null;
    }),
    Activities: selectedOptions.Activities.map((option) => {
      const optionData = categories[3].data.find((item) => item.option === option);
      return optionData ? { option, value: optionData.value } : null;
    }),
  };
  
  const navigateToTripDisplayMainPage  = () => {
    Options = selectedOptionsObj;
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
                {category.data
                  .filter((option) => option.value <= originalBudget) // Filter options based on budget
                  .map((option, optionIndex) => (
                    <TouchableOpacity
                      key={optionIndex}
                      onPress={() => selectOption(category.title, option.option, option.value)}
                      style={[
                        styles.option,
                          selectedOptions[category.title].includes(option.option) &&
                          styles.selectedOption,
                        (category.title !== "Activities" && category.title !== "Food") &&
                          selectedOptions[category.title] === option.option &&
                          styles.selectedOption,
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
        <Button
          title="Confirm"
          onPress={navigateToTripDisplayMainPage}
        />
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
