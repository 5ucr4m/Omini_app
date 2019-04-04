import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import NavLink from '../../components/NavLink';

const SignIn = ({ navigation }) => (
  <Container>
    <Input label="E-mail" placeholder="Digite seu e-mail" />
    <Input label="Password" placeholder="Sua senha secreta" />
    <Button title="Entrar" onPress={() => navigation.navigate('Search')} />
    <NavLink text="Criar conta grátis" onPress={() => navigation.navigate('SignUp')} />
  </Container>
);

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

SignIn.navigationOptions = {
  header: null,
};

export default SignIn;
