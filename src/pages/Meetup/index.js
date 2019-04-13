import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MeetupActions from '../../store/ducks/meetup';

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

  _handleSubmit = async id => {
    const { subscriptionRequest } = this.props;
    subscriptionRequest(id);
  };

  render() {
    const { meetup } = this.props;
    return (
      <Fragment>
        <Image
          source={{
            uri: meetup.image_url,
          }}
        />
        <Container>
          <Title>{meetup.title}</Title>
          <Members>{meetup.members}</Members>
          <Description>{meetup.description}</Description>
          <LocalLabel>Realizado em:</LocalLabel>
          <LocalDescription>{meetup.place}</LocalDescription>
          <Button
            title="Inscreva-se"
            onPress={() => this._handleSubmit(meetup.id)}
          />
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(MeetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Meetup);
