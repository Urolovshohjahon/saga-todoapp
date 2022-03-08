import { all } from 'redux-saga/effects';
import { routinePromiseWatcherSaga } from 'redux-saga-routines';
import { Api } from 'services/api';
import apiSagas from './apiSagas';

export default function* () {
  const sagas = [
    routinePromiseWatcherSaga()
  ].concat(
    apiSagas(Api)
  );
  yield all(sagas)
}