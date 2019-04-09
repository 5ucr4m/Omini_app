import { call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../services/api';
import NavigationService from '../../services/navigation';

import ActionsAuth from '../ducks/auth';
import ActionsPreference from '../ducks/preferences';

export function* login({ email, password }) {
  try {
    const response = yield call(api.post, '/sessions', { email, password });
    const { token, user } = response.data;
    const preferences = [];
    user.preferences.map(ele => preferences.push(ele.id));

    // atualiza os dados do usuário e o token no duck de auth
    yield put(ActionsAuth.authSuccess(token, user));

    // Carrega as preferencias da resposta do usuário e passa para o duck de Preferences
    yield put(ActionsPreference.initPreferences(preferences));

    NavigationService.navigate('Dashboard');
  } catch (err) {
    Alert.alert('Algo deu Errado...', 'Usuário e/ou senha inválidos');
    yield put(ActionsAuth.authFailure('Usuário ou senha inválidos'));
  }
}
