import { call, put, takeEvery } from 'redux-saga/effects';

import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from '@/store/slices/userSlice';

import api, { setTokenAPI } from '@/config/api';

function* login({ payload: { email, password } }) {
  try {
    const response = yield call(api.post, '/auth/sign-in', { email, password });
    const { data, headers } = response;
    setTokenAPI(headers.authorization);

    yield put(LOGIN_SUCCESS({ data }));
  } catch (error) {
    yield put(LOGIN_FAILURE({ error: error.response.data }));
  }
}

export default function* watcher() {
  yield takeEvery(LOGIN, login);
}
