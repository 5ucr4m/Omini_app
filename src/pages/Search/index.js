import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import meetupActions from '../../store/ducks/meetup';

import Card from '../../components/Card';
import TabBar from '../../components/TabBar';
import {
  Container,
  InputSearch,
  MeetupList,
  InputContainerSearch,
  InputIcon,
} from './styles';

class Search extends Component {
  state = {
    search: '',
    filtredMeetups: [],
  };

  componentDidMount() {
    const { meetups } = this.props;
    this.setState({ filtredMeetups: meetups });
  }

  _filter = search => {
    const filtredMeetups = this.props.meetups.filter(item => {
      return item.title.toUpperCase().indexOf(search.toUpperCase()) > -1;
    });
    this.setState({ search, filtredMeetups });
  };

  render() {
    const { navigation, selectMeetup } = this.props;
    const { filtredMeetups, search } = this.state;
    return (
      <Fragment>
        <Container>
          <InputContainerSearch>
            <InputIcon name="search" />
            <InputSearch
              placeholder="Buscar meetups"
              value={search}
              onChangeText={this._filter}
            />
          </InputContainerSearch>

          <MeetupList
            data={filtredMeetups}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item: meetup }) => (
              <Card
                title={meetup.title}
                members={meetup.subscriptions}
                source={meetup.image_url}
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
  }
}

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
  meetups: state.meetups.data.meetups,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(meetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
