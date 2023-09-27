
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Something to a Django API
  };

  return (
    <View>
      <Text style = {styles.title}>Sign In</Text>

      <TextInput
        style = {styles.text}
        placeholderTextColor= 'black'
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <TextInput
        textAlign={'center'}
        style = {styles.text}
        placeholderTextColor= 'black'
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <Text style = {styles.div}> </Text>
      <View style = {styles.but}>
      	<Button style = {alignSelf = "center" }title="Sign In" onPress={handleSignIn} />
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
  
  text: {
    color: "black",
    textAlign : "center",
    padding: 20,
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

export default SignInScreen;

