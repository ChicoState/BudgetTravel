import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import fakeDatabase from './FakeDatabase';
//import axios from 'axios';
interface SignInScreenProps{
  navigation: any;
}
const SignInScreen = (props:SignInScreenProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
/*
  const sendRequest = async (reqString) => {
    try {
      const res = await axios.post('http://10.0.2.2:8000//api/Tourism', { reqString });
      return res.data.response;
    } catch (error) {
      console.error(error);
      throw error; // Re-throw the error for the caller to handle, if needed
    }
  };*/


  const handleSignIn = async () => {
    try {
      const user = fakeDatabase.find((user) => user.email === username);
  
      if (!user) {
        // Email not found in the database
        console.log("Look's like you're a new user, create an account.");
        setError("Look's like you're a new user, create an account.");
      } else if (user.password === password) {
        // Navigate to the "Home" screen on successful authentication
        props.navigation.navigate("Home");
      } else {
        // Password doesn't match
        console.log("Wrong password, you sure this is you?");
        setError("Wrong password, you sure this is you?");
      }
    } catch (error) {
      // Handle errors that occur during the authentication process
      console.error("Authentication error:", error.message);
    }
  };
  const handleForgot= () => {props.navigation.navigate("ForgotScreen")};
  const handleExisting= () => {props.navigation.navigate("CreateAccountScreen")};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subscript}>Safe Travels!</Text>
      <TextInput
        style={styles.input}
        placeholder="user@email.com"
        value={username}
        onChangeText={(text) => {
          setUsername(text),
          setError(null);}}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => {
          setPassword(text),
          setError(null);}}
      />
      <Text testID="error-message" style={styles.error}>
        {error}
      </Text>
      <Button title="Sign In" onPress={handleSignIn} />
      <TouchableOpacity onPress={handleForgot}>
        <Text style={styles.existingText}>Forgot Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleExisting}>
        <Text style={styles.existingText}>Don't have an account?</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subscript: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  existingText: {
    fontSize: 16,
    color: 'gray', // Customize the color
    marginTop: 16,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },  
  error: {
    color: 'red',
    marginBottom: 10,
  },
  
});

export default SignInScreen;
