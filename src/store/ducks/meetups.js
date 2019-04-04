import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  meetupRequest: null,
  selectMeetup: ['meetup'],
});

export const MeetupsTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  data: [
    {
      title: 'GW Meetup 1',
      members: '120 Membros',
      source:
        'https://cdn.shopify.com/s/files/1/0533/2089/files/shopify-meetup-hosts.jpg?v=1510161140',
    },
    {
      title: 'GW Meetup 2',
      members: '240 Membros',
      source:
        'https://cdn.shopify.com/s/files/1/0533/2089/files/shopify-meetup-hosts.jpg?v=1510161140',
    },
    {
      title: 'Uber Meetup #1',
      members: '90 Membros',
      source:
        'https://cdn.shopify.com/s/files/1/0533/2089/files/shopify-meetup-hosts.jpg?v=1510161140',
    },
    {
      title: 'Uber Meetup #2',
      members: '90 Membros',
      source:
        'https://cdn.shopify.com/s/files/1/0533/2089/files/shopify-meetup-hosts.jpg?v=1510161140',
    },
  ],
  selectedMeetup: null,
});

/* Reducers */

export const selectMeetup = (state, { meetup }) => state.merge({ selectedMeetup: meetup });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SELECT_MEETUP]: selectMeetup,
});
