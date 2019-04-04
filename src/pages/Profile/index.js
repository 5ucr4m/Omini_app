import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import PreferencesList from '../../components/Preferences';
import { Container, Content } from './styles';

const preferencias = ['Font-end', 'Back-end', 'Mobile', 'DevOps', 'Gestão', 'Marketing'];

const Profile = () => (
  <Container>
    <Content>
      <Input label="Nome" value="Marcus Vinicius C Soares" />
      <Input label="Senha" placeholder="Sua senha secreta" />
      <Input label="Confirmação de senha" placeholder="Sua senha secreta" />
      <PreferencesList preferences={preferencias} />
      <Button title="Salvar" onPress={() => {}} />
    </Content>
  </Container>
);

Profile.navigationOptions = {
  title: 'Profile',
};

export default Profile;
