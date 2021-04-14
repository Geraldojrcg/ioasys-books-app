import { call, put, takeLatest } from 'redux-saga/effects';

import api from '@/config/api';

import { GET_BOOKS, GET_BOOKS_SUCCESS, GET_BOOKS_FAILURE } from '@/store/slices/bookSlice';

function* getBooks({ payload: { page } }) {
  try {
    const response = yield call(api.get, `/books?page=${page}&amount=25`);
    const { data } = response;

    yield put(GET_BOOKS_SUCCESS(data));
  } catch (error) {
    yield put(GET_BOOKS_FAILURE({ error: error.response }));
  }
}

export default function* watcher() {
  yield takeLatest(GET_BOOKS, getBooks);
}
