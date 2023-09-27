import React from 'react';
import { View, Text, Button , StyleSheet} from 'react-native';

const AboutScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View>
      <Text>About Screen</Text>
      <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')} />
    </View>
  );
};


const styles = StyleSheet.create({
  text: {
    color: "black",
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
});



export default AboutScreen;

