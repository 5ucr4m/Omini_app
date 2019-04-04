import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Card from '../../components/Card';
import TabBar from '../../components/TabBar';
import {
  Container, Content, HorizontalContent, Label, CardContainer,
} from './styles';

import meetupActions from '../../store/ducks/meetups';

const Dashboard = ({ navigation, meetups, selectMeetup }) => (
  <Fragment>
    <Container>
      <Content>
        <Label>Inscrições</Label>
        <HorizontalContent>
          {meetups.map(meetup => (
            <CardContainer key={meetup.title}>
              <Card
                title={meetup.title}
                members={meetup.members}
                source={meetup.source}
                onPress={() => {
                  selectMeetup(meetup);
                  navigation.navigate('Meetup', { title: meetup.title });
                }}
              />
            </CardContainer>
          ))}
        </HorizontalContent>
        <Label>Próximos Meetups</Label>
        <HorizontalContent>
          {meetups.map(meetup => (
            <CardContainer key={meetup.title}>
              <Card
                title={meetup.title}
                members={meetup.members}
                source={meetup.source}
                onPress={() => {
                  selectMeetup(meetup);
                  navigation.navigate('Meetup', { title: meetup.title });
                }}
              />
            </CardContainer>
          ))}
        </HorizontalContent>
        <Label>Recomendados</Label>
        <HorizontalContent>
          {meetups.map(meetup => (
            <CardContainer key={meetup.title}>
              <Card
                title={meetup.title}
                members={meetup.members}
                source={meetup.source}
                onPress={() => {
                  selectMeetup(meetup);
                  navigation.navigate('Meetup', { title: meetup.title });
                }}
              />
            </CardContainer>
          ))}
        </HorizontalContent>
      </Content>
    </Container>
    <TabBar />
  </Fragment>
);

Dashboard.propTypes = {
  navigation: PropTypes.shape({}).isRequired,
  selectMeetup: PropTypes.func.isRequired,
  meetups: PropTypes.arrayOf().isRequired,
};

Dashboard.navigationOptions = {
  title: 'Início',
};

const mapStateToProps = state => ({
  meetups: state.meetups.data,
});

const mapDispatchToProps = dispatch => bindActionCreators(meetupActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
