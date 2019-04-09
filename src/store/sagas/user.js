import { call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../services/api';
import NavigationService from '../../services/navigation';

import AuthActions from '../ducks/auth';

export function* updateUser({ user }) {
  try {
    const response = yield call(api.put, '/users', user);
    yield put(AuthActions.updateUser(response.data.user));
    Alert.alert('Perfil', 'Suas informações foram atualizadas', [
      { text: 'OK', onPress: () => NavigationService.navigate('Dashboard') },
    ]);
  } catch (err) {}
}
