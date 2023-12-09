import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
interface SignInScreenProps{
  navigation: any;
}
const SignInScreen = (props:SignInScreenProps) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    const isPasswordCorrect = true; // For demonstration, assume the password is correct.
  
    if (isPasswordCorrect) {
      props.navigation.navigate("Home");
    } else {
      console.error("Incorrect password");
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
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      
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
  
});

export default SignInScreen;
