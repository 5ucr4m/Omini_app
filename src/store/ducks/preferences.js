import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  PreferencesRequest: null,
  PreferencesSuccess: ['preferences'],
  initPreferences: ['preferences'],
  OnChangePreferences: ['id'],
});

export const PreferencesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  list: [],
  userPreferences: [],
  error: null,
});

/* Reducers */

export const listRequest = (state, { preferences }) => state.merge({ list: preferences });
export const initPreferences = (state, { preferences }) => state.merge({ userPreferences: preferences });
export const select = (state, { id }) => (state.userPreferences.includes(id)
  ? state.merge({ userPreferences: state.userPreferences.filter(value => value !== id) })
  : state.merge({ userPreferences: [...state.userPreferences, id] }));

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PREFERENCES_SUCCESS]: listRequest,
  [Types.INIT_PREFERENCES]: initPreferences,
  [Types.ON_CHANGE_PREFERENCES]: select,
});
