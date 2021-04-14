import React from 'react';
import { StatusBar } from 'react-native';

import Login from '@/presentational/Login';

const LoginScreen = () => (
  <>
    <StatusBar hidden />
    <Login />
  </>
);

export default LoginScreen;
