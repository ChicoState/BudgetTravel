import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'; // Import Alert from react-native

const SignInScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const url = 'BOXI PLEASE REPLACE WITH URL'; // BOXI PLEASE REPLACE WITH URL **************

      const userData = {
        username: email,
        password: password,
      };

      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      };

      const response = await fetch(url, requestOptions);

      if (response.ok) {
        const responseData = await response.json();
        console.log('Response:', responseData);

        if (1) {
          navigation.navigate('TripDisplayMainPage');
        } else {
          Alert.alert('Invalid Information');
        }
      } else {
        console.error('Error:', response.status);
        Alert.alert('Error: Unable to sign in');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error');
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
              placeholder="Username" 
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
              placeholder="Password"
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

