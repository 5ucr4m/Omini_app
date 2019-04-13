import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import signUpActions from '../../store/ducks/signup';

import { Container } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import NavLink from '../../components/NavLink';

class SignUp extends Component {
  state = {
    name: 'teste',
    email: 'teste@teste.com',
    password: 'asdqwe123',
  };

  _handleSignUp = () => {
    const { SignUpRequest } = this.props;
    const { name, email, password } = this.state;

    SignUpRequest(name, email, password);
  };
  render() {
    const { navigation, signup } = this.props;
    const { name, email, password } = this.state;
    return (
      <Container>
        <Input
          label="Nome"
          placeholder="Digite seu nome"
          value={name}
          onChangeText={text => this.setState({ name: text })}
        />
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={text => this.setState({ email: text })}
        />
        <Input
          label="Password"
          placeholder="Sua senha secreta"
          value={password}
          onChangeText={text => this.setState({ password: text })}
        />
        <Button title="Criar conta" onPress={this._handleSignUp} loading={signup.loading} />
        <NavLink text="Já tenho conta" onPress={() => navigation.navigate('SignIn')} />
      </Container>
    );
  }
}

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

SignUp.navigationOptions = {
  header: null,
};

const mapStateToProps = state => ({
  signup: state.signup,
});

const mapDispatchToProps = dispatch => bindActionCreators(signUpActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignUp);
