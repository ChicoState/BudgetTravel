import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { Icon } from '@ui-kitten/components';
let dest;







const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {



  const [response, setResponse] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>Take A Trip</Text>
          </View>
          <View>
            <Introduction navigation={navigation} />
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={styles.bottomBarButton}
          onPress={() => navigation.navigate('CreateAccountScreen')}
        >
          <Icon name="person-outline" fill="#000" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarButton}
          onPress={() => navigation.navigate('PlanTripScreen1')}
        >
          <Icon name="calendar-outline" fill="#000" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomBarButton}
          onPress={() => navigation.navigate('SignInScreen')}
        >
          <Icon name="log-in-outline" fill="#000" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Introduction = ({ navigation }) => {
  
  

  
  return (
          
<View style={styles.container}>
  <View style={styles.column}>
  
    <TouchableOpacity onPress={() => navigation.navigate('PlanTripScreen1', { dest: 'Costa Rica' })}
  style={styles.container}>
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
    
    <TouchableOpacity onPress={() => navigation.navigate('PlanTripScreen1', { dest: 'Tijuana, Mexico' })}
  style={styles.container}>
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
  
    <TouchableOpacity onPress={() => navigation.navigate('PlanTripScreen1', { dest: 'Tokyo, Japan' })}
  style={styles.container}>
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
     
         
    <TouchableOpacity onPress={() => navigation.navigate('PlanTripScreen1', { dest: 'San Diego' })}
  style={styles.bottomContainer}>
      <View style={styles.box}>
     	<Image
        	style={styles.image}
        	source={require('./photos/sandiego.jpg')} 
      	/>
	<View style={styles.pad}></View>
      	<View style={styles.container}>
      	<Text style = {styles.text}>San Diego, USA</Text>
      	</View>
     </View>
     </TouchableOpacity>
     
  
  </View>
  
</View>

  	
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  headerContainer: {
    backgroundColor: '#3498db',
    padding: 10,
  },
  header: {
    fontSize: 32,
    color: 'white',
    textAlign: 'center',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'lightgray',
  },
  bottomBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBarButtonText: {
    fontSize: 16,
    color: '#3498db',
    fontWeight: 'bold',
  },
  introductionContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  box: {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    margin: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '60%',
    borderRadius: 10,
  },
  text: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    padding: 10,
  },
  pad: {
    margin: 10,

  },
  column: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  bottomContainer: {
    flex: 1,
    height: 300, // Set the height you desire
  },
  icon: {
    width: 32, // Adjust the width and height as needed
    height: 32,
    // Add any other styles for the icons
  },
});

export { dest };
export default HomeScreen;

