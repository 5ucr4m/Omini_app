import React from 'react';

import Button from '../../components/Button';
import PreferencesList from '../../components/Preferences';
import { Container, Title, SubTitle } from './styles';

const preferencias = ['Font-end', 'Back-end', 'Mobile', 'DevOps', 'Gestão', 'Marketing'];

const Preferences = () => (
  <Container>
    <Title>Olá, Diego</Title>
    <SubTitle>
      Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
      selecionarmos os melhores meetups pra você;
    </SubTitle>
    <PreferencesList preferences={preferencias} />
    <Button title="Continuar" onPress={() => {}} />
  </Container>
);

Preferences.navigationOptions = {
  header: null,
};

export default Preferences;
