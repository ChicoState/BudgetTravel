import React from 'react';
import { View, Text, Button } from 'react-native';

const ContactScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View>
      <Text>Contact Screen</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default ContactScreen;

