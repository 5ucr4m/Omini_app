import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  meetupRequest: null,
  meetupSuccess: ['data'],
  subscriptionRequest: ['id'],
  subscriptionSuccess: ['subscritions'],
  selectMeetup: ['meetup'],
});

export const MeetupTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: {
    meetups: [],
    subscription: [],
    recommendation: [],
  },
  selectedMeetup: null,
});

/* Reducers */
export const meetupSuccess = (state, { data }) => state.merge({ data });
export const updateSubscriptions = (state, { subscritions }) => state.merge({ data: { ...state.data, subscription: subscritions } });
export const selectMeetup = (state, { meetup }) => state.merge({ selectedMeetup: meetup });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.MEETUP_SUCCESS]: meetupSuccess,
  [Types.SUBSCRIPTION_SUCCESS]: updateSubscriptions,
  [Types.SELECT_MEETUP]: selectMeetup,
});
