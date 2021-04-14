import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import BookScreen from '../screens/BookScreen';

const Stack = createStackNavigator();

const MainStack = () => (
  <Stack.Navigator initialRouteName='Home' headerMode='none'>
    <Stack.Screen name='Home' component={HomeScreen} />
    <Stack.Screen name='Book' component={BookScreen} />
  </Stack.Navigator>
);

export default MainStack;
