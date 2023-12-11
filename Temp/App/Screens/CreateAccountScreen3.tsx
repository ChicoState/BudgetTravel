
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CreateAccountScreen3 : React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleCreateAccount = () => {
    // Something to a Django API
  };

  return (
<View>
      <Text style = {styles.title}>Sign In</Text>
      
      <View style = {styles.row}>
      	
      	<View style={{ flexDirection: 'column' }}>

           <Text style = {styles.headerText}> First Name </Text>
           
           
      	<View style = {styles.box}>	
      		
      		<TextInput
        			textAlign={'center'}
        			style = {styles.text}
        			placeholderTextColor= 'gray'
        			placeholder="John"
        			value={password}
        			onChangeText={(text) => setPassword(text)}
      		/>
           </View>
           </View>
           
           
           
           <View style={{ flexDirection: 'column' }}>

           <Text style = {styles.headerText}> Last Name </Text>
           
           
      	<View style = {styles.box}>	
      		
      		<TextInput
        			textAlign={'center'}
        			style = {styles.text}
        			placeholderTextColor= 'gray'
        			placeholder="Doe"
        			value={password}
        			onChangeText={(text) => setPassword(text)}
      		/>
           </View>
           </View>
      	
      	
      	
      </View> 
      
      <View style = {styles.row}>
      	
      	<View style={{ flexDirection: 'column' }}>

           <Text style = {styles.headerText}> Address </Text>
           
           
      	<View style = {styles.box}>	
      		
      		<TextInput
        			textAlign={'center'}
        			style = {styles.text}
        			placeholderTextColor= 'gray'
        			placeholder="123 Drewy Lane"
        			value={password}
        			onChangeText={(text) => setPassword(text)}
      		/>
           </View>
           <Button title="Create Account" onPress={() => navigation.navigate('CreateAccountScreen2')} />
           </View>
           
           
           
      	
      	
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
     marginBottom: 100,
  },
  
  row: {
    flexDirection: 'row',
    
  },
  
  
  
  box: {
    borderWidth: 1,       
    borderColor: 'black',  
    borderRadius: 5,     
    
    width: 150,  
  },
  
  text: {
    color: "black",
    textAlign : "center",
    padding: 5,
    fontSize: 10,
  },
  
  headerText: {
    color: "black",
    textAlign : "center",
    padding: 5,
    fontSize: 20,
  },
  
  div: {
    padding: 40,
  },
  
  but:{
    display: "flex",
    width: "20%",
    flexDirection: "row",
    
  }
 
  
});

export default CreateAccountScreen3;

