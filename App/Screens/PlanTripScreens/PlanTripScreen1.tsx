import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { Input, List } from '@ui-kitten/components';

let location;
let startDate;
let endDate;

const PlanTripScreen1 = ({ navigation }) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const locations = ['Costa Rica', 'Tokyo, Japan', 'Tijuana, Mexico', 'San Diego'];
  const inputRef = useRef(null);

  const filterLocations = (input) => {
    const filtered = locations.filter((location) =>
      location.toLowerCase().includes(input.toLowerCase())
    );
    return filtered;
  };

  const onDayPress = (day) => {
    if (!selectedStartDate) {
      setSelectedStartDate(day.dateString);
    } else if (!selectedEndDate) {
      if (day.dateString < selectedStartDate) {
        setSelectedEndDate(null);
        setSelectedStartDate(day.dateString);
      } else {
        setSelectedEndDate(day.dateString);
      }
    } else {
      setSelectedStartDate(day.dateString);
      setSelectedEndDate(null);
    }
  };

  const handleInputChange = (text) => {
    setInputText(text);
    const filteredSuggestions = filterLocations(text);
    setSuggestions(filteredSuggestions);
  };

  const selectSuggestion = (suggestion) => {
    setInputText(suggestion);
    setSuggestions([]);
  };

  const handleConfirm = () => {
    if (locations.includes(inputText) && selectedStartDate && selectedEndDate) {
      location = inputText;
      startDate = selectedStartDate;
      endDate = selectedEndDate;
      navigation.navigate('PlanTripScreen2');
    } else {
      // Handle error or prompt the user to select a valid range
    }
  };

  const getDatesBetween = (startDate, endDate) => {
    const dates = {};
    const currentDate = new Date(startDate);
    const today = new Date();

    while (currentDate <= new Date(endDate)) {
      const date = currentDate.toISOString().split('T')[0];

      if (currentDate >= today) {
        dates[date] = {
          selected: true,
          color: 'blue',
          textColor: 'white',
        };
      }

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  const getDisabledDatesBeforeToday = () => {
    const disabledDates = {};
    const today = new Date();

    for (let date = new Date(selectedStartDate); date < today; date.setDate(date.getDate() + 1)) {
      const dateString = date.toISOString().split('T')[0];
      disabledDates[dateString] = { disabled: true, disableTouchEvent: true };
    }
    for (let date = new Date(selectedEndDate); date < today; date.setDate(date.getDate() + 1)) {
      const dateString = date.toISOString().split('T')[0];
      disabledDates[dateString] = { disabled: true, disableTouchEvent: true };
    }

    return disabledDates;
  };

  const handleScreenPress = () => {
    // When the screen is pressed, unfocus the input and hide suggestions
    inputRef.current.blur();
    setSuggestions([]);
  };

  return (
    <TouchableWithoutFeedback onPress={handleScreenPress}>
      <View style={styles.container}>
      <Text style={styles.title}>Plan Your Trip!</Text>
      <Text style={styles.text}>Select a location:</Text>
        <View style={styles.inputContainer}>
          <Input
            ref={inputRef}
            value={inputText}
            onChangeText={handleInputChange}
            placeholder="Search for a location"
            style={styles.input}
          />
        </View>
        {suggestions.length > 0 && (
          <View style={styles.suggestionsContainer}>
            <List
              data={suggestions}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => selectSuggestion(item)}>
                  <Text style={styles.suggestionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        <Text style={styles.text}>Set the dates:</Text>
        <Calendar
          onDayPress={onDayPress}
          markedDates={{
            [selectedStartDate]: {
              startingDay: true,
              selected: true,
              color: 'blue',
              textColor: 'white',
            },
            [selectedEndDate]: {
              endingDay: true,
              selected: true,
              color: 'blue',
              textColor: 'white',
            },
            ...getDatesBetween(selectedStartDate, selectedEndDate),
            ...getDisabledDatesBeforeToday(),
          }}
        />
        <Button
          title="Confirm"
          onPress={handleConfirm}
          disabled={!selectedStartDate || !selectedEndDate || !inputText}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    width: '80%',
  },
  suggestionsContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 5,
  },
  suggestionText: {
    padding: 10,
    fontSize: 15,
    color: 'black',
  },
  text: {
    fontSize: 20,
    color: 'black',
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
    padding: 20,
  },
});

export { location, startDate, endDate };
export default PlanTripScreen1;
