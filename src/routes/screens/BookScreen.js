import React from 'react';
import Book from '@/presentational/Book';
import { StatusBar } from 'react-native';

const BookScreen = () => {
  return (
    <>
      <StatusBar hidden />
      <Book></Book>
    </>
  );
};

export default BookScreen;
