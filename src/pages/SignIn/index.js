import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ActionsAuth from '../../store/ducks/auth';

import { Container } from './styles';
import Button from '../../components/Button';
import Input from '../../components/Input';
import NavLink from '../../components/NavLink';

class SignIn extends Component {
  state = {
    email: '5ucr4m@gmail.com',
    password: '123123',
  };

  componentDidMount() {}

  _handleLogin = () => {
    const { authRequest } = this.props;
    const { email, password } = this.state;
    authRequest(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { navigation, auth } = this.props;
    return (
      <Container>
        <Input
          label="E-mail"
          placeholder="Digite seu e-mail"
          value={email}
          onChangeText={text => this.setState({ email: text })}
          autoCapitalize="none"
        />

        <Input
          label="Password"
          placeholder="Sua senha secreta"
          value={password}
          onChangeText={text => this.setState({ password: text })}
          secureTextEntry
          autoCapitalize="none"
        />
        <Button title="Entrar" onPress={this._handleLogin} loading={auth.loading} />
        <NavLink text="Criar conta grátis" onPress={() => navigation.navigate('SignUp')} />
      </Container>
    );
  }
}

SignIn.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

SignIn.navigationOptions = {
  header: null,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionsAuth, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SignIn);
