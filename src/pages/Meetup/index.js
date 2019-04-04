import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../../components/Button';
import {
  Container,
  Image,
  Title,
  Members,
  Description,
  LocalLabel,
  LocalDescription,
} from './styles';

class Meetup extends Component {
  componentDidMount() {}

  render() {
    const { meetup } = this.props;
    return (
      <Fragment>
        <Image
          source={{
            uri: meetup.source,
          }}
        />
        <Container>
          <Title>{meetup.title}</Title>
          <Members>{meetup.members}</Members>
          <Description>
            O meetup de React Native é um espaço para discutir sobre tecnologias por volta do
            desenvolvimento web utilizando a biblioteca do Facebook para criação de interfaces
            móveis multiplataforma com Javascript.
          </Description>
          <LocalLabel>Realizado em:</LocalLabel>
          <LocalDescription>Rua Guilherme Gembala, 260, Rio do Sul - SC</LocalDescription>
          <Button title="Inscreva-se" onPress={() => {}} />
        </Container>
      </Fragment>
    );
  }
}

Meetup.propTypes = {
  meetup: PropTypes.shape({
    title: PropTypes.string,
    members: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
};

Meetup.navigationOptions = ({ navigation }) => {
  const { params } = navigation.state;
  return {
    title: params ? params.title : '#',
  };
};

const mapStateToProps = state => ({
  meetup: state.meetups.selectedMeetup,
});

export default connect(mapStateToProps)(Meetup);
