import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import NavLink from '../../components/NavLink';

const SignUp = ({ navigation }) => (
  <Container>
    <Input label="Nome" placeholder="Digite seu nome" />
    <Input label="E-mail" placeholder="Digite seu e-mail" />
    <Input label="Password" placeholder="Sua senha secreta" />
    <Button title="Criar conta" onPress={() => {}} />
    <NavLink text="Já tenho conta" onPress={() => navigation.navigate('SignIn')} />
  </Container>
);

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

SignUp.navigationOptions = {
  header: null,
};

export default SignUp;
