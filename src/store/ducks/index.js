import { combineReducers } from 'redux';

import { reducer as meetupsReducer } from './meetups';

const rootReducer = combineReducers({
  meetups: meetupsReducer,
  test: () => [],
});

export default rootReducer;
