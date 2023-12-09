import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
interface ForgotScreenProps{
  navigation: any;
}
const ForgotScreen = (props:ForgotScreenProps) => {
  const [recoveryEmail, findEmail] = useState('');

  const handleRemember = () => {props.navigation.navigate("SignIn")};
  const handleEmail= () => {
    console.log('Email:', recoveryEmail);
  };
  const handleNew= () => {props.navigation.navigate("Setup")};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>We'll find your password for you!</Text>
      <Text style={styles.subscript}>Enter account email</Text>
      <TextInput
        style={styles.input}
        placeholder="user@email.com"
        value={recoveryEmail}
        onChangeText={(text) => findEmail(text)}
      />
      
      <Button title="Remember Password" onPress={handleEmail} />
      <TouchableOpacity onPress={handleRemember}>
        <Text style={styles.existingText}>Remember your password?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNew}>
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
    marginBottom: 30,
  },
  subscript: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 8,
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

export default ForgotScreen;
