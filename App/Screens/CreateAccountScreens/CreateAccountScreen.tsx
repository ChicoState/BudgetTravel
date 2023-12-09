import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
interface UsernameScreenProps{
  navigation: any;
}
const Usernamescreen = (props:UsernameScreenProps) => {
  const [username, setUsername] = useState('');

  const handleContinue = () => {
    console.log('Username:', username);
    props.navigation.navigate('setPass');
  };

  const handleExistingAcc= () => {props.navigation.navigate('Login');};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's create a login for you!</Text>
      <Text style={styles.subscript}>Please enter your email</Text>
      <TextInput
        style={styles.input}
        placeholder="user@email.com"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
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

export default Usernamescreen;
