import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


const TripDisplayMainPage: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [response, setResponse] = useState('');

  return (
    <ScrollView>
    <View>
      <Text style = {styles.text}>Trip Details</Text>
      
       <View>
        <Text style = {styles.paragraph}>Location</Text>
        <Text style = {styles.div}>Location</Text>
        
        <Text style = {styles.div}>Location</Text>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
        <View style={styles.container}></View>
      </View>
      <Button title="Create an Account" onPress={() => navigation.navigate('CreateAccountScreen')} />
      <Button title="Log In ( want both on bottom menu)" onPress={() => navigation.navigate('SignInScreen')} />
      
    </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  
  paragraph: {
     flexDirection:'column',
     textAlign: "center",
     fontSize: 20,
     color: "black",
     padding: 20,
     marginTop: 10,
     marginBottom: 100,
  },
  
  text: {
    color: "black",
    textAlign : "center",
    fontSize: 40,
    padding: 20,
  },
  
  div: {
    padding: 40,
  },
  
  container: {
    flex: 30,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    height: 20,
  },

  
  but:{
    display: "flex",
    width: "20%",
    flexDirection: "row",
    
  }
 
  
});













export default TripDisplayMainPage;

