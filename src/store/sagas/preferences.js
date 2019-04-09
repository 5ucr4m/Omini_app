import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import PreferencesActions from '../ducks/preferences';

export function* loadPreferences() {
  const response = yield call(api.get, '/preferences');
  yield put(PreferencesActions.PreferencesSuccess(response.data));
}
