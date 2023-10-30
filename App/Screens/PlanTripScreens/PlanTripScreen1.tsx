import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { IndexPath, Select, SelectItem } from '@ui-kitten/components';
//import { dest } from './../HomeScreen';
let location;
let startDate;
let endDate;


const PlanTripScreen1 = ({ navigation }) => {
  const [selectedStartDate, setSelectedStartDate] = useState(null);
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(new IndexPath(0));
  const data = ['Select a Location', 'Costa Rica', 'Tokyo, Japan', 'Tijuana, Mexico', 'San Diego'];
/*
  useEffect(() => {
    if (!dest) {
      location = dest;
    }
    if (location) {
      const locationIndex = data.indexOf(location);
      if (locationIndex !== -1) {
        setSelectedLocation(new IndexPath(locationIndex));
      }
    }
  }, [location]);
  */
  const handleLocationChange = (index) => {
    const selectedLocation = data[index.row];
    setSelectedLocation(index); 
    location = selectedLocation;
  };
  const onDayPress = (day) => {
    if (!selectedStartDate) {
      setSelectedStartDate(day.dateString);
    } else if (!selectedEndDate) {
      setSelectedEndDate(day.dateString);
    } else {
      setSelectedStartDate(day.dateString);
      setSelectedEndDate(null);
    }
  };
  const handleConfirm = () => {
    if (selectedLocation.row && selectedStartDate && selectedEndDate) {
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

    while (currentDate <= new Date(endDate)) {
      const date = currentDate.toISOString().split('T')[0];
      dates[date] = {
        selected: true,
        color: 'blue',
        textColor: 'white',
      };
      currentDate.setDate(currentDate.getDate() + 1);
    }

    return dates;
  };

  return (
    <View>
      <Text style={styles.title}>Plan Your Trip</Text>

      <Select
        selectedIndex={selectedLocation}
        onSelect={handleLocationChange}
        value={`${data[selectedLocation.row]}`}
      >
        {data.map((item, index) => (
          <SelectItem title={item} key={index} />
        ))}
      </Select>

      <Text style={styles.text}>Select a date range:</Text>
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
          // Customize the style for the dates between the selected start and end dates
          ...getDatesBetween(selectedStartDate, selectedEndDate),
        }}
      />
<Button
        title="Confirm Date Range"
        onPress={handleConfirm}
        disabled={!selectedStartDate || !selectedEndDate}
      />
    </View>
  );
};

const getDatesBetween = (startDate, endDate) => {
  const dates = {};
  const currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    const date = currentDate.toISOString().split('T')[0];
    dates[date] = { selected: true, color: 'blue', textColor: 'white' };
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dates;
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
    padding: 20,
    marginTop: 50,
    marginBottom: 60,
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    padding: 20,
  },
  rangeText: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    padding: 10,
  },
});
export {location, startDate, endDate};
export default PlanTripScreen1;
