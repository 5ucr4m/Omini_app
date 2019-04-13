import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-community/async-storage';

import api from '../../services/api';

import { loadPreferences } from './preferences';
import { meetupLoad } from './meetup';
import ActionsAuth from '../ducks/auth';
import ActionsPreference from '../ducks/preferences';

export function* init() {
  yield loadPreferences();

  //   AsyncStorage.clear();

  // Recupera o token do AsyncStorage
  const token = JSON.parse(yield AsyncStorage.getItem('@omini:token'));
  yield put(ActionsAuth.setToken(token));

  // Recupera o usuário verificando se o token é valido.
  try {
    const { data } = yield call(api.get, '/users');
    const preferences = [];
    data.user.preferences.map(ele => preferences.push(ele.id));

    yield meetupLoad();
    yield put(ActionsAuth.authSuccess(token, data.user));
    yield put(ActionsPreference.initPreferences(preferences));
  } catch (err) {
    console.tron.log('Token Inválido');
  }
}
