
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, CheckBox } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { selected } from './PlanTripScreen1';

const PlanTripScreen2 : React.FC<{ navigation: any }> = ({ navigation }) =>  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const PlanTripScreen1 = () => {
    // Something to a Django API
  };

  const [selectedDate, setSelectedDate] = useState('');

    const onDayPress = (day) => {
    setSelectedDate(day.dateString);
  };
  return (
    <View>
      <Text style = {styles.title}>Plan Your Trip</Text>
      <Text style = {styles.text}>Duration: To</Text>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selected]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'blue',
            selectedTextColor: 'white',
          },
          
            [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'blue',
            selectedTextColor: 'white',
          },

        }}
      />

      <View style = {styles.but}>
      	
      	<Button title="Next" onPress={() => navigation.navigate('PlanTripScreen3')} />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  
  title: {
     flexDirection:'column',
     textAlign: "center",
     fontSize: 40,
     color: "black",
     padding: 20,
     marginTop: 50,
     marginBottom: 60,
  },
  
  
  text: {
    fontSize: 40,
    color: "black",
    textAlign : "center",
    padding: 20,
  },
  
  div: {
    padding: 40,
  },
  
  but:{


    justifyContent: 'center',
    
  }
 
  
});

export default PlanTripScreen2;

