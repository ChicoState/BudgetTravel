
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

let check = "check";

const SignInScreen : React.FC<{ navigation: any }> = ({ navigation }) =>  {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSignIn = () => 
  {
    
     
    
     if(1) // Django confirms info is valid
     {
     	navigation.navigate('TripDisplayMainPage');
     }
     else
     {
          // Display invalid infomation
     
     }
    // Something to a Django API
  };
  

  return (
<View>
      <Text style = {styles.title}>Sign In </Text>
      

      	
      	<View style={{ flexDirection: 'column' }}>

           <Text style = {styles.headerText}> Username </Text>
           
           <View style = {styles.row}>
      	<View style = {styles.box}>	
      		<View styles = "justify-content: center">
      		<TextInput
        			textAlign={'center'}
        			style = {styles.text}
        			placeholderTextColor= 'gray'
        			placeholder={check}
        			value={email}
        			onChangeText={(text) => setEmail(text)}
      		/>
      		</View>
           </View>
           </View>

	<Text style = "padding: 20"> </Text>

           <Text style = {styles.headerText}> Password </Text>
                      <View style = {styles.row}>
      	<View style = {styles.box}>	
      		<View styles = "justify-content: center">
      		<TextInput
        			textAlign={'center'}
        			style = {styles.text}
        			placeholderTextColor= 'gray'
        			placeholder="Password"
        			value={password}
        			onChangeText={(text) => setPassword(text)}
      		/>
      		</View>
           </View>
           </View>
           
      	<Text style = {styles.div}> </Text>
      	

           <Button title="Sign In" onPress={handleSignIn} />

           
           
           
           
      	
      	
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
     marginBottom: 70,
  },
  
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  
  col: {
  	flexDirection: 'column',
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
    padding: 130,
  },
  
  but:{
    display: "flex",
    width: "20%",
    flexDirection: "row",
    
  }
 
  
});

export default SignInScreen;

