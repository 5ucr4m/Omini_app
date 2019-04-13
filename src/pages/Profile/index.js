import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../../components/Button';
import Input from '../../components/Input';
import PreferencesList from '../../components/Preferences';
import { Container, Content } from './styles';
import UserActions from '../../store/ducks/user';

class Profile extends Component {
  state = {
    name: this.props.user.name || '',
    password: '',
    password_confirmation: '',
  };

  _handleSubmit = async () => {
    const { preferences, UserUpdateRequest } = this.props;
    const user = {
      name: this.state.name,
      password: this.state.password,
      password_confirmation: this.state.password_confirmation,
      preferences,
    };
    UserUpdateRequest(user);
  };

  render() {
    const { name, password, password_confirmation } = this.state;
    return (
      <Container>
        <Content>
          <Input
            label="Nome"
            value={name}
            onChangeText={name => this.setState({ name })}
          />
          <Input
            label="Senha"
            placeholder="Sua senha secreta"
            value={password}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={password => this.setState({ password })}
          />
          <Input
            label="Confirmação de senha"
            placeholder="Sua senha secreta"
            value={password_confirmation}
            autoCapitalize="none"
            secureTextEntry
            onChangeText={password_confirmation =>
              this.setState({ password_confirmation })
            }
          />
          <PreferencesList initUserPreferences={this.props.userPreferences} />
          <Button title="Salvar" onPress={this._handleSubmit} />
        </Content>
      </Container>
    );
  }
}

Profile.navigationOptions = {
  title: 'Profile',
};

const mapStateToProps = state => ({
  user: state.auth.user,
  preferences: state.preferences.selectedPreferences,
  userPreferences: state.preferences.userPreferences,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
