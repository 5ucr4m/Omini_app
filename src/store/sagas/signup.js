import { call, put } from 'redux-saga/effects';
import api from '../../services/api';
import NavigationService from '../../services/navigation';

import ActionsAuth from '../ducks/auth';
import SignUpActions from '../ducks/signup';

export function* signUp({ name, email, password }) {
  try {
    const response = yield call(api.post, '/users', { name, email, password });

    const { token, user } = response.data;

    // Passa o token e as informações do usuário logado para o duck de auth
    yield put(ActionsAuth.authSuccess(token, user));

    NavigationService.navigate('Preferences');
  } catch (err) {
    yield put(SignUpActions.SignUpFailure('Não foi possivel criar o usuário'));
  }
}
