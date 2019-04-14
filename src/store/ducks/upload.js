import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  uploadRequest: ['file'],
  uploadSuccess: ['file'],
});

export const UploadTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  file: {},
  url: null,
});

/* Reducers */

export const uploadSuccess = (state, { file }) => state.merge({ file, url: file.url });

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.UPLOAD_SUCCESS]: uploadSuccess,
});
