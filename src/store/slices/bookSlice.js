import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  booksList: [],
  selectedBook: null,
  totalPages: null,
  page: 1,
  error: null
};

const counterSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    GET_BOOKS: (state, { payload: { page } }) => ({ ...state, isLoading: true, page }),
    GET_BOOKS_SUCCESS: (state, { payload: { data, totalPages, page } }) => ({
      ...state,
      isLoading: false,
      booksList: data,
      page,
      totalPages
    }),
    GET_BOOKS_FAILURE: (state, { payload }) => ({
      ...state,
      isLoading: false,
      error: payload.error
    }),
    SELECT_BOOK: (state, { payload }) => ({
      ...state,
      selectedBook: payload.book
    })
  }
});

const { actions, reducer } = counterSlice;

export const { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE, SELECT_BOOK } = actions;
export default reducer;
