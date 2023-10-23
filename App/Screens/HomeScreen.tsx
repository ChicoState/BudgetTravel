import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';








const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {



  const [response, setResponse] = useState('');

  return (
    <ScrollView>
    <View>
      <View style={styles.container}>
      <Text style = {styles.header}>Take A Trip</Text>
      </View>
       <View>
        
        <Introduction navigation={navigation} />
      </View>
      <View style={styles.bottomButton}>
      <Button title="Create an Account" onPress={() => navigation.navigate('CreateAccountScreen')} />
      <Button title="Log In ( want both on bottom menu)" onPress={() => navigation.navigate('SignInScreen')} />
      </View>
    </View>
    </ScrollView>
  );
};

const Introduction = ({ navigation }) => {
  
  

  
  return (
          
<View style={styles.container}>
  <View style={styles.column}>
  
    <TouchableOpacity onPress={() => navigation.navigate('PlanTripScreen1')} style={styles.container}>
    <View style={styles.box}>
     <Image
        style={styles.image}
        source={require('./photos/costaRica.jpg')} 
      />
      <View style={styles.pad}></View>
      <View style={styles.container}>
      <Text style = {styles.text}>Costa Rica</Text>
      </View>
    </View>
    </TouchableOpacity>
    
    <TouchableOpacity onPress={() => navigation.navigate('PlanTripScreen1')} style={styles.container}>
    <View style={styles.box}>
     	<Image
        	style={styles.image}
        	source={require('./photos/TJ.jpg')} 
      	/>
	<View style={styles.pad}></View>
      	<View style={styles.container}>
      	<Text style = {styles.text}>Tijuana, Mexico</Text>
      	</View>
    </View>
    </TouchableOpacity>
    
    
    
    <TouchableOpacity onPress={() => navigation.navigate('PlanTripScreen1')} style={styles.container}>
      <View style={styles.box}>
     	<Image
        	style={styles.image}
        	source={require('./photos/tokyo.jpg')} 
      	/>
	<View style={styles.pad}></View>
      	<View style={styles.container}>
      	<Text style = {styles.text}>Tokyo, Japan</Text>
      	</View>
     </View>
     </TouchableOpacity>
     
         
    <TouchableOpacity onPress={() => navigation.navigate('PlanTripScreen1')} style={styles.container}>
      <View style={styles.box}>
     	<Image
        	style={styles.image}
        	source={require('./photos/sandiego.jpg')} 
      	/>
	<View style={styles.pad}></View>
      	<View style={styles.container}>
      	<Text style = {styles.text}>San Diego</Text>
      	</View>
     </View>
     </TouchableOpacity>
     
  
  </View>
  
</View>

  	
  );
};




const styles = StyleSheet.create({
  
    text: {
    color: 'black',

  },
  header: {
    color: 'black',
    fontSize: 60,
    justifyContent: 'center',
  },
  pad: {
    margin: 10,

  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
    bottomButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    
  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  box: {
    flexDirection: 'column',
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    margin: 5,
  },
  image: {
    width: 195,
    height: 120,
    borderRadius: 10,
  },
 
  
});













export default HomeScreen;

