import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
interface UsernameScreenProps{
  navigation: any;
}
const CreateAccountScreen2 = (props:UsernameScreenProps) => {
  const [password, setPassword] = useState('');
  const [checkPass, checkPassword] = useState('');
  const handleContinue = () => {
    // Password validation regex
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (password === checkPass && passwordRegex.test(password)) {
        props.navigation.navigate("Home");
    } else {
        const errorMessage = "Password validation failed. Please make sure your password has at least 8 characters, at least 1 lowercase letter, 1 uppercase letter, and 1 special character.";
          
        // Display the error message to the user (replace this line with your actual code for displaying messages)
        console.error(errorMessage);

        // Example using alert (you might want to use a different UI component)
        alert(errorMessage);
    }
};

  const handleExistingAcc= () => {props.navigation.navigate('Login');};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Great! Now set a password</Text>
      <Text style={styles.subscript}>Password requires:</Text>
      <Text style={styles.subscript}>1. At least 8 characters</Text>
      <Text style={styles.subscript}>1. Upper and lowercase</Text>
      <Text style={styles.subscript}>2. One special character</Text>
      <TextInput
        style={styles.input}
        placeholder="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
        <TextInput
        style={styles.input}
        placeholder="check password"
        value={checkPass}
        onChangeText={(text) => checkPassword(text)}
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
export default CreateAccountScreen2;
