// import { take, call, put, select } from 'redux-saga/effects';
import { takeLatest, call, put } from 'redux-saga/effects';
import { FETCH_SYSTEMS_DATA } from './constants';
import {
  requestSystemsDataSucceeded,
  requestSystemsDataFailed,
} from './actions';

export function fetchSystemsFromServer() {
  return fetch(`${window.location.origin}/api/systems`).then(response =>
    response.json(),
  );
}

function* fetchSystems() {
  try {
    const systems = yield call(fetchSystemsFromServer);
    yield put(requestSystemsDataSucceeded(systems));
  } catch (e) {
    yield put(requestSystemsDataFailed(e.message));
  }
}
// Individual exports for testing
export default function* fetchSystemsSaga() {
  yield takeLatest(FETCH_SYSTEMS_DATA, fetchSystems);
  // See example in containers/HomePage/saga.js
}
