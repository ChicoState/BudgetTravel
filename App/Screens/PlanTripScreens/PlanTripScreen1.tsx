
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, CheckBox } from 'react-native';
import { Calendar } from 'react-native-calendars';

let selected;
const PlanTripScreen1 : React.FC<{ navigation: any }> = ({ navigation }) =>  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const PlanTripScreen1 = () => {
    // Something to a Django API
  };

  const [selectedDate, setSelectedDate] = useState('');

    const onDayPress = (day) => {
    selected = day.dateString;
    setSelectedDate(day.dateString);
  };
  return (
    <View>
      <Text style = {styles.title}>Plan Your Trip</Text>
      <Text style = {styles.text}>Duration: Start</Text>
      <Calendar
        onDayPress={onDayPress}
        markedDates={{
          [selectedDate]: {
            selected: true,
            disableTouchEvent: true,
            selectedColor: 'blue',
            selectedTextColor: 'white',
          },

        }}
      />

      <Text style = {styles.div}> </Text>
      <View style = {styles.but}>
      	
      	<Button title="Next" onPress={() => navigation.navigate('PlanTripScreen2')} />
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

export { selected };
export default PlanTripScreen1;

