import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  authRequest: ['email', 'password'],
  authSuccess: ['token', 'user'],
  authFailure: ['error'],
  setToken: ['token'],
  updateInfoSignedUser: ['user'],
});

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  signedIn: false,
  token: null,
  error: null,
  loading: false,
  user: {},
});

/* Reducers */

export const authRequest = state => state.merge({ loading: true });
export const authSuccess = (state, { token, user }) => state.merge({
  token,
  signedIn: true,
  error: null,
  loading: false,
  user,
});
export const authFailure = (state, { error }) => state.merge({ error, loading: false });
export const updateToken = (state, { token }) => state.merge({ token });
export const updateUser = (state, { user }) => state.merge({ user });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: authRequest,
  [Types.AUTH_SUCCESS]: authSuccess,
  [Types.AUTH_FAILURE]: authFailure,
  [Types.SET_TOKEN]: updateToken,
  [Types.UPDATE_INFO_SIGNED_USER]: updateUser,
});
