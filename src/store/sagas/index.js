import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '../ducks/auth';
import { SignupTypes } from '../ducks/signup';
import { PreferencesTypes } from '../ducks/preferences';
import { UserTypes } from '../ducks/user';
import { MeetupTypes } from '../ducks/meetup';

import { init } from './init';
import { login } from './auth';
import { signUp } from './signup';
import { loadPreferences } from './preferences';
import { updateUser } from './user';
import { subscription, newMeetup } from './meetup';

export default function* rootSaga() {
  yield init();

  yield all([takeLatest(AuthTypes.AUTH_REQUEST, login)]);

  yield all([takeLatest(SignupTypes.SIGN_UP_REQUEST, signUp)]);

  yield all([
    takeLatest(PreferencesTypes.PREFERENCES_REQUEST, loadPreferences),
  ]);

  yield all([takeLatest(UserTypes.USER_UPDATE_REQUEST, updateUser)]);

  yield all([takeLatest(MeetupTypes.NEW_MEETUP_REQUEST, newMeetup)]);
  yield all([takeLatest(MeetupTypes.SUBSCRIPTION_REQUEST, subscription)]);
}
