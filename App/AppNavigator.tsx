import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import ContactScreen from './Screens/ContactScreen';
import SignInScreen from './Screens/SignInScreen';
import CreateAccountScreen from './Screens/CreateAccountScreen';
import TripDisplayMainPage from './Screens/TripDisplayMainPage';
import CreateAccountScreen2 from './Screens/CreateAccountScreen2';
import CreateAccountScreen3 from './Screens/CreateAccountScreen3';
import PlanTripScreen1 from './Screens/PlanTripScreen1';
import PlanTripScreen2 from './Screens/PlanTripScreen2';
import PlanTripScreen3 from './Screens/PlanTripScreen3';



const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
        <Stack.Screen name="TripDisplayMainPage" component={TripDisplayMainPage} />
        <Stack.Screen name="CreateAccountScreen2" component={CreateAccountScreen2} />
        <Stack.Screen name="CreateAccountScreen3" component={CreateAccountScreen3} />
        <Stack.Screen name="PlanTripScreen1" component={PlanTripScreen1} />
        <Stack.Screen name="PlanTripScreen2" component={PlanTripScreen2} />
        <Stack.Screen name="PlanTripScreen3" component={PlanTripScreen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

