import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';

import MainStack from './stacks/MainStack';
import AuthStack from './stacks/AuthStack';

const Routes = () => {
  const { user } = useSelector(({ user: userReducer }) => userReducer);

  return <NavigationContainer>{user ? <MainStack /> : <AuthStack />}</NavigationContainer>;
};

export default Routes;
