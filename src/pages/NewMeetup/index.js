import React, { Fragment } from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Preferences from '../../components/Preferences';
import TabBar from '../../components/TabBar';
import InputImage from '../../components/InputImage';
import { Container, Content } from './styles';

const preferencias = ['Font-end', 'Back-end', 'Mobile', 'DevOps', 'Gestão', 'Marketing'];

const NewMeetup = () => (
  <Fragment>
    <Container>
      <Content>
        <Input label="Título" placeholder="Digite o título do meetup" />
        <Input label="Descrição" placeholder="Descreva seu meetup" />
        <InputImage />
        <Input label="Localização" placeholder="Onde seu meetup irá acontecer?" />
        <Preferences preferences={preferencias} title="Tema do meetup" />
        <Button title="Salvar" onPress={() => {}} />
      </Content>
    </Container>
    <TabBar />
  </Fragment>
);

NewMeetup.navigationOptions = {
  title: 'Novo meetup',
};

export default NewMeetup;
