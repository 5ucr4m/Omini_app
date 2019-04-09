import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import meetupActions from '../../store/ducks/meetups';

import Card from '../../components/Card';
import TabBar from '../../components/TabBar';
import {
  Container, InputSearch, MeetupList, InputContainerSearch, InputIcon,
} from './styles';

const Search = ({ navigation, meetups, selectMeetup }) => (
  <Fragment>
    <Container>
      <InputContainerSearch>
        <InputIcon name="search" />
        <InputSearch placeholder="Buscar meetups" />
      </InputContainerSearch>

      <MeetupList
        data={meetups}
        keyExtractor={item => item.title}
        renderItem={({ item: meetup }) => (
          <Card
            title={meetup.title}
            members={meetup.members}
            source={meetup.source}
            onPress={() => {
              selectMeetup(meetup);
              navigation.navigate('Meetup', { title: meetup.title });
            }}
          />
        )}
      />
    </Container>
    <TabBar />
  </Fragment>
);

Search.navigationOptions = {
  title: 'Busca',
  headerLeft: null,
};

Search.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
  meetups: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectMeetup: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  meetups: state.meetups.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(meetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
