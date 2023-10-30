import React from 'react';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <ApplicationProvider
    mapping={mapping}
    theme={lightTheme}>
      <AppNavigator />
    </ApplicationProvider>
  );
};

export default App;
