import { call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '../../services/api';

import uploadActions from '../ducks/upload';

export function* uploadFile({ file }) {
  try {
    const dataFile = new FormData();

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    dataFile.append('file', {
      uri: file.uri,
      type: file.type,
      name: file.fileName,
    });

    const { data } = yield call(api.post, '/files', dataFile, config);
    yield put(uploadActions.uploadSuccess(data));
  } catch (err) {
    Alert.alert(
      'Algo deu errado!!',
      'Não foi possivel fazer o upload da imagem',
    );
  }
}
