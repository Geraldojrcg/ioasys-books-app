import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  user: null,
  error: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    LOGIN: state => ({ ...state, isLoading: true }),
    LOGIN_SUCCESS: (state, { payload: { data } }) => ({
      ...state,
      isLoading: false,
      user: data
    }),
    LOGIN_FAILURE: (state, { payload: { error } }) => ({
      ...state,
      isLoading: false,
      error
    }),
    LOGOUT: () => initialState
  }
});

const { actions, reducer } = userSlice;

export const { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } = actions;
export default reducer;
