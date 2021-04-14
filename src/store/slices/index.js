import { combineReducers } from '@reduxjs/toolkit';

import user from './userSlice';
import books from './bookSlice';

export default combineReducers({ user, books });
