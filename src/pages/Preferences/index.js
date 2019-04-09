import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Button from '../../components/Button';
import PreferencesList from '../../components/Preferences';
import { Container, Title, SubTitle } from './styles';
import UserActions from '../../store/ducks/user';

const Preferences = ({ user, preferences, UserUpdateRequest }) => (
  <Container>
    <Title>{`Olá, ${user.name}`}</Title>
    <SubTitle>
      Parece que é seu primeiro acesso por aqui, comece escolhendo algumas preferências para
      selecionarmos os melhores meetups pra você;
    </SubTitle>
    <PreferencesList />
    <Button title="Continuar" onPress={() => UserUpdateRequest({ preferences })} />
  </Container>
);

Preferences.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  preferences: PropTypes.arrayOf(PropTypes.number).isRequired,
  UserUpdateRequest: PropTypes.func.isRequired,
};

Preferences.navigationOptions = {
  header: null,
};

const mapStateToProps = state => ({
  user: state.auth.user,
  preferences: state.preferences.userPreferences,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Preferences);
