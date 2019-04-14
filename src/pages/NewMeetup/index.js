import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Preferences from '../../components/Preferences';
import TabBar from '../../components/TabBar';
import InputImage from '../../components/InputImage';
import { Container, Content } from './styles';

import MeetupActions from '../../store/ducks/meetup';

class NewMeetup extends Component {
  state = {
    title: '',
    description: '',
    place: '',
  };
  componentDidMount() {}

  _handleSubmit = () => {
    const { title, description, place } = this.state;
    const { subjects, newMeetupRequest } = this.props;
    const data = {
      title,
      description,
      place,
      subjects,
    };
    newMeetupRequest(data);
  };

  render() {
    const { title, description, place } = this.state;
    return (
      <Fragment>
        <Container>
          <Content>
            <Input
              label="Título"
              placeholder="Digite o título do meetup"
              value={title}
              onChangeText={text => this.setState({ title: text })}
            />
            <Input
              label="Descrição"
              placeholder="Descreva seu meetup"
              value={description}
              onChangeText={text => this.setState({ description: text })}
            />
            <InputImage />
            <Input
              label="Localização"
              placeholder="Onde seu meetup irá acontecer?"
              value={place}
              onChangeText={text => this.setState({ place: text })}
            />
            <Preferences title="Tema do meetup" />
            <Button title="Salvar" onPress={this._handleSubmit} />
          </Content>
        </Container>
        <TabBar />
      </Fragment>
    );
  }
}

NewMeetup.navigationOptions = {
  title: 'Novo meetup',
  headerLeft: null,
};

const mapStateToProps = state => ({
  subjects: state.preferences.selectedPreferences,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(MeetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewMeetup);
