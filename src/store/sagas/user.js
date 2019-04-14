import { call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../services/api';
import NavigationService from '../../services/navigation';
import ActionsPreference from '../ducks/preferences';

import { meetupLoad } from './meetup';

import AuthActions from '../ducks/auth';

export function* updateUser({ user }) {
  try {
    const { data } = yield call(api.put, '/users', user);
    const preferences = [];
    data.user.preferences.map(ele => preferences.push(ele.id));

    yield put(AuthActions.updateInfoSignedUser(data.user));
    yield put(ActionsPreference.initPreferences(preferences));
    yield meetupLoad();

    Alert.alert('Perfil', 'Suas informações foram atualizadas', [
      { text: 'OK', onPress: () => NavigationService.navigate('Dashboard') },
    ]);
  } catch (err) {
    Alert.alert('Algo deu errado!!', err);
  }
}
