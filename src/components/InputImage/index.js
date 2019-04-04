import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Label, Input } from './styles';

const InputImage = () => (
  <Container>
    <Label>Imagem</Label>
    <Input>
      <Icon name="camera-alt" size={24} color="#fff" />
    </Input>
  </Container>
);

export default InputImage;
