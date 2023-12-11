import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

interface UsernameScreenProps {
  navigation: any;
}

const Usernamescreen = (props: UsernameScreenProps) => {
  const [username, setUsername] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleContinue = () => {
    // Regular expression for a simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(username)) {
      // If the username is not a valid email address, set the error state
      console.log('Invalid email address');
      setError('Invalid email address');
    } else {
      // If the username is a valid email address, clear the error state
      setError(null);
      console.log('Username:', username);
      props.navigation.navigate('CreateAccountScreen2');
    }
  };

  const handleExistingAcc = () => {
    props.navigation.navigate('SignInScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's create a login for you!</Text>
      <Text style={styles.subscript}>Please enter your email</Text>
      <TextInput
        style={styles.input}
        placeholder="user@email.com"
        value={username}
        placeholderTextColor= 'gray'
        onChangeText={(text) => {
          // Clear the error when the user starts typing again
          setError(null);
          setUsername(text);
        }}
      />
      <Text testID="error-message" style={styles.error}>
        {error}
      </Text>
      <Button title="Continue" onPress={handleContinue} />
      <TouchableOpacity onPress={handleExistingAcc}>
        <Text style={styles.existingText}>Already have an account?</Text>
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
    marginBottom: 30,
    color: 'black'
  },
  subscript: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black'
  },
  existingText: {
    fontSize: 16,
    color: 'gray', // Customize the color
    marginTop: 16,
    color: 'black'
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color: 'black'
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});

export default Usernamescreen;
