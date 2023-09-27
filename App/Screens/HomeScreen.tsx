import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';

// Main Screen of Page
const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [response, setResponse] = useState('');

  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      
   
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
      <Button title="Go to SignIn" onPress={() => navigation.navigate('SignInScreen')} />
      <View>
        
        <Wid navigation={navigation} />
      </View>
    </View>
  );
};

const Wid = ({ navigation }) => {
  
  const buttons = [];

  
  for (let i = 0; i < 4; i++) {
    buttons.push(
      <Button
        key={i}
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
    );
  }

  
  return <View>{buttons}</View>;
};

















export default HomeScreen;

