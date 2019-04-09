import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  SignUpRequest: ['name', 'email', 'password'],
  SignUpFailure: ['error'],
});

export const SignupTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  loading: false,
  error: false,
});

/* Reducers */

export const signUpRequest = state => state.merge({ loading: true });
export const signUpFailed = (state, { error }) => state.merge({ loading: false, error });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.SIGN_UP_REQUEST]: signUpRequest,
  [Types.SIGN_UP_FAILURE]: signUpFailed,
});
