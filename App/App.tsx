import React from 'react';
import { ApplicationProvider, IconRegistry, Layout, Text } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AppNavigator from './AppNavigator';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
const App = () => {
  return (
    <><IconRegistry icons={EvaIconsPack} /><ApplicationProvider
      mapping={mapping}
      theme={lightTheme}>
      <AppNavigator />
    </ApplicationProvider></>
  );
};

export default App;
