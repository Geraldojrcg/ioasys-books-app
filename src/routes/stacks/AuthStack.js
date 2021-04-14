import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName='Login' headerMode='none'>
    <Stack.Screen name='Login' component={LoginScreen} />
  </Stack.Navigator>
);

export default AuthStack;
