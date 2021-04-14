import React from 'react';

import Home from '@/presentational/Home';
import { StatusBar } from 'react-native';
import Loader from '@/components/Loader';

const HomeScreen = () => (
  <>
    <StatusBar hidden />
    <Home />
    <Loader></Loader>
  </>
);

export default HomeScreen;
