import { combineReducers } from 'redux';

import { reducer as meetupReducer } from './meetup';
import { reducer as authReducer } from './auth';
import { reducer as signUpReducer } from './signup';
import { reducer as preferencesReducer } from './preferences';
import { reducer as userReducer } from './user';
import { reducer as uploadReducer } from './upload';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  signup: signUpReducer,
  meetups: meetupReducer,
  preferences: preferencesReducer,
  upload: uploadReducer,
});

export default rootReducer;
