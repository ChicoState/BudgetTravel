import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'; // Import Alert from react-native
import axios from 'axios';
const SignInScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const login = [
  ["John@gmail.com", "password"], // Username: "ss", Password: "sss"
  ["AnnLand@gmail.com", "password"],
  ["Tom@gmail.com", "password"],
  
     // Username: "YY", Password: "TR"
];

let placeholder1 = "username"
let placeholder2 = "password"

const handleSignIn = () => {
    let isValidUser = false;

    for (let i = 0; i < login.length; i++) {
      if (login[i][0] === email && login[i][1] === password) {
        isValidUser = true;
        navigation.navigate('PlanTripScreen1');
        break;
      }
    }

    if (!isValidUser) {
      Alert.alert('Invalid credentials');
      setEmail('');
      setPassword(''); // Resetting password state to an empty string
    }
  };





  return (
    <View>
      <Text style={styles.title}>Sign In </Text>

      <View style={{ flexDirection: 'column' }}>
        <Text style={styles.headerText}> Username </Text>
        <View style={styles.row}>
          <View style={styles.box}>
            <TextInput
              textAlign={'center'}
              style={styles.text}
              placeholderTextColor="gray"
              placeholder= {placeholder1}
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>
        </View>

        <Text style={{ padding: 20 }}> </Text>

        <Text style={styles.headerText}> Password </Text>
        <View style={styles.row}>
          <View style={styles.box}>
            <TextInput
              textAlign={'center'}
              style={styles.text}
              placeholderTextColor="gray"
              placeholder={placeholder2}
              secureTextEntry 
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
        </View>

        <Text style={styles.div}> </Text>

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

