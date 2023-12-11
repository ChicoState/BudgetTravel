import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './Screens/HomeScreen';
import AboutScreen from './Screens/AboutScreen';
import ContactScreen from './Screens/ContactScreen';
import SignInScreen from './Screens/SignInScreens/SignInScreen';
import ForgotScreen from './Screens/SignInScreens/ForgotScreen';
import CreateAccountScreen from './Screens/CreateAccountScreens/CreateAccountScreen';
import TripDisplayMainPage from './Screens/TripDisplayMainPage';
import CreateAccountScreen2 from './Screens/CreateAccountScreens/CreateAccountScreen2';
import CreateAccountScreen3 from './Screens/CreateAccountScreens/CreateAccountScreen3';
import PlanTripScreen1 from './Screens/PlanTripScreens/PlanTripScreen1';
import PlanTripScreen2 from './Screens/PlanTripScreens/PlanTripScreen2';
import PlanTripScreen3 from './Screens/PlanTripScreens/PlanTripScreen3';
import TestLocation from './Screens/PlanTripScreens/testLocation';



const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />

        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="ForgotScreen" component={ForgotScreen} />
        <Stack.Screen name="CreateAccountScreen" component={CreateAccountScreen} />
        <Stack.Screen name="setPass" component={CreateAccountScreen2} />
        <Stack.Screen name="CreateAccountScreen3" component={CreateAccountScreen3} />

        <Stack.Screen name="TripDisplayMainPage" component={TripDisplayMainPage} />
        <Stack.Screen name="PlanTripScreen1" component={PlanTripScreen1} />
        <Stack.Screen name="PlanTripScreen2" component={PlanTripScreen2} />
        <Stack.Screen name="PlanTripScreen3" component={PlanTripScreen3} />
        <Stack.Screen name="TestLocation" component={TestLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

