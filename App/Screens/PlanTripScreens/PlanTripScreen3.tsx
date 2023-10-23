
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, CheckBox } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { selected } from './PlanTripScreen1';

let budgetAmount;
const PlanTripScreen3 : React.FC<{ navigation: any }> = ({ navigation }) =>  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const set = () => {
    budgetAmount = budget;
    
  };

  const [budget, setbudget] = useState('');

  return (
    <View>
      <Text style = {styles.title}>Plan Your Trip</Text>
      <Text style = {styles.text}>Budget:</Text>
      <Text style = {styles.div}> </Text>
      
      <View style={styles.row}>
      <View style={styles.box}>
      <TextInput
        style = {styles.text}
        placeholderTextColor= 'black'
        placeholder="Amount"
        value={budget}
        onChangeText={(text) => setbudget(text)}
      />
      
      <View >
      	
      	<Button title="Set" onPress={() => set} />
      </View>
      
      
      
      </View>
      </View>
      <Text style = {styles.div}> </Text>
      <View style = {styles.but}>
      	
      	<Button title="Next" onPress={() => navigation.navigate('TripDisplayMainPage')} />
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
    
  },
    box: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: 200,
    height: 150,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    margin: 5,
  },
  
  row:
  {
    flexDirection: 'row',
    justifyContent: 'center',
  
  }
 
  
});

export { budgetAmount };
export default PlanTripScreen3;

