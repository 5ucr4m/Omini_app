import { call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../services/api';

import MeetupActions from '../ducks/meetup';

import NavigationService from '../../services/navigation';

export function* meetupLoad() {
  try {
    const { data } = yield call(api.get, '/meetups');
    yield put(MeetupActions.meetupSuccess(data));
  } catch (err) {
    Alert.alert('Algo deu errado', err);
  }
}

export function* newMeetup({ meetup }) {
  try {
    yield call(api.post, '/meetups', meetup);
    Alert.alert('Meetup', 'Seu meetup foi criado com sucesso!!');

    yield meetupLoad();
    NavigationService.navigate('Dashboard');
  } catch (err) {
    Alert.alert('Algo deu errado', err);
  }
}

export function* subscription({ id }) {
  try {
    const { data } = yield call(api.post, `/users/subscription/${id}`);
    yield put(MeetupActions.subscriptionSuccess(data));

    Alert.alert(
      'Inscrição',
      'Sua inscrição no evento foi realizada com sucesso!!',
    );

    NavigationService.navigate('Dashboard');
  } catch (err) {
    Alert.alert('Algo deu errado', err);
  }
}
