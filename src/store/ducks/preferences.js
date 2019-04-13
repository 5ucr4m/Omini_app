import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  PreferencesRequest: null,
  PreferencesSuccess: ['preferences'],
  initPreferences: ['preferences'],
  loadUserPreferences: null,
  OnChangePreferences: ['id'],
  ResetPreferences: ['preferences'],
});

export const PreferencesTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  list: [],
  userPreferences: [],
  selectedPreferences: [],
  error: null,
});

/* Reducers */

const initPreferences = (state, { preferences }) => state.merge({ userPreferences: preferences });
const listRequest = (state, { preferences }) => state.merge({ list: preferences });
const select = (state, { id }) => (state.selectedPreferences.includes(id)
  ? state.merge({
    selectedPreferences: state.selectedPreferences.filter(
      value => value !== id,
    ),
  })
  : state.merge({ selectedPreferences: [...state.selectedPreferences, id] }));

const resetPreferences = (state, { preferences = [] }) => state.merge({ selectedPreferences: preferences });
const loadUserPreferences = state => state.merge({ selectedPreferences: state.userPreferences });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.INIT_PREFERENCES]: initPreferences,
  [Types.PREFERENCES_SUCCESS]: listRequest,
  [Types.ON_CHANGE_PREFERENCES]: select,
  [Types.RESET_PREFERENCES]: resetPreferences,
  [Types.LOAD_USER_PREFERENCES]: loadUserPreferences,
});
